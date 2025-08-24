class StreamChat {
  constructor() {
    this.messages = document.getElementById('messages');
    this.input = document.getElementById('input');
    this.sendButton = document.getElementById('send');
    
    this.isStreaming = false;
    this.init();
  }

  init() {
    this.sendButton.addEventListener('click', () => this.handleSend());
    this.input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        this.handleSend();
      }
    });
  }

  async handleSend() {
    if (this.isStreaming) return;
    
    const message = this.input.value.trim();
    if (!message) return;

    try {
      this.setStreamingState(true);
      this.clearMessages();
      await this.streamResponse(message);
    } catch (error) {
      this.displayError(`Error: ${error.message}`);
    } finally {
      this.setStreamingState(false);
    }
  }

  setStreamingState(streaming) {
    this.isStreaming = streaming;
    this.sendButton.disabled = streaming;
    this.input.disabled = streaming;
    
    if (streaming) {
      this.sendButton.textContent = 'Sending...';
      this.displayLoading();
    } else {
      this.sendButton.textContent = 'Send';
      this.input.focus();
    }
  }

  clearMessages() {
    this.messages.textContent = '';
  }

  displayLoading() {
    this.messages.textContent = 'Loading response...';
  }

  displayError(message) {
    this.messages.innerHTML = `<span class="error">${message}</span>`;
  }

  async streamResponse(message) {
    const response = await fetch('/stream-chat/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    this.clearMessages();

    try {
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        this.appendMessage(chunk);
      }
    } finally {
      reader.releaseLock();
    }
  }

  appendMessage(text) {
    this.messages.textContent += text;
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.messages.scrollTop = this.messages.scrollHeight;
  }
}

// Initialize the chat when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new StreamChat();
});
