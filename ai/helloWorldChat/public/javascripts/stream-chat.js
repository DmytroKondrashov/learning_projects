class StreamChat {
  constructor() {
    this.messages = document.getElementById('messages');
    this.input = document.getElementById('input');
    this.sendButton = document.getElementById('send');
    
    // System prompt elements
    this.systemPrompt = document.getElementById('systemPrompt');
    this.toggleSystemPrompt = document.getElementById('toggleSystemPrompt');
    this.systemPromptContent = document.getElementById('systemPromptContent');
    this.saveSystemPrompt = document.getElementById('saveSystemPrompt');
    this.clearSystemPrompt = document.getElementById('clearSystemPrompt');
    
    this.isStreaming = false;
    this.currentAIResponse = null;
    this.currentSystemPrompt = '';
    
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
    
    // System prompt event listeners
    this.toggleSystemPrompt.addEventListener('click', () => this.toggleSystemPromptVisibility());
    this.saveSystemPrompt.addEventListener('click', () => this.saveSystemPromptText());
    this.clearSystemPrompt.addEventListener('click', () => this.clearSystemPromptText());
    
    // Load saved system prompt from localStorage
    this.loadSystemPrompt();
  }

  toggleSystemPromptVisibility() {
    const isVisible = this.systemPromptContent.style.display !== 'none';
    this.systemPromptContent.style.display = isVisible ? 'none' : 'block';
    this.toggleSystemPrompt.textContent = isVisible ? 'Show' : 'Hide';
  }

  saveSystemPromptText() {
    this.currentSystemPrompt = this.systemPrompt.value.trim();
    localStorage.setItem('systemPrompt', this.currentSystemPrompt);
    
    // Show feedback
    const originalText = this.saveSystemPrompt.textContent;
    this.saveSystemPrompt.textContent = 'Saved!';
    this.saveSystemPrompt.style.backgroundColor = '#28a745';
    
    setTimeout(() => {
      this.saveSystemPrompt.textContent = originalText;
      this.saveSystemPrompt.style.backgroundColor = '';
    }, 1500);
  }

  clearSystemPromptText() {
    this.systemPrompt.value = '';
    this.currentSystemPrompt = '';
    localStorage.removeItem('systemPrompt');
    
    // Show feedback
    const originalText = this.clearSystemPrompt.textContent;
    this.clearSystemPrompt.textContent = 'Cleared!';
    this.clearSystemPrompt.style.backgroundColor = '#6c757d';
    
    setTimeout(() => {
      this.clearSystemPrompt.textContent = originalText;
      this.clearSystemPrompt.style.backgroundColor = '';
    }, 1500);
  }

  loadSystemPrompt() {
    const savedPrompt = localStorage.getItem('systemPrompt');
    if (savedPrompt) {
      this.systemPrompt.value = savedPrompt;
      this.currentSystemPrompt = savedPrompt;
    }
  }

  async handleSend() {
    if (this.isStreaming) return;
    
    const message = this.input.value.trim();
    if (!message) return;

    try {
      this.setStreamingState(true);
      this.displayUserMessage(message);
      this.input.value = '';
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
    } else {
      this.sendButton.textContent = 'Send';
      this.input.focus();
    }
  }

  displayUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `
      <div class="message-content">
        <div class="message-text">${this.escapeHtml(message)}</div>
        <div class="message-time">${this.getCurrentTime()}</div>
      </div>
    `;
    this.messages.appendChild(messageDiv);
    this.scrollToBottom();
  }

  createAIMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai-message';
    messageDiv.innerHTML = `
      <div class="message-content">
        <div class="message-text"></div>
        <div class="message-time">${this.getCurrentTime()}</div>
      </div>
    `;
    this.messages.appendChild(messageDiv);
    this.currentAIResponse = messageDiv.querySelector('.message-text');
    this.scrollToBottom();
    return messageDiv;
  }

  displayError(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message error-message';
    messageDiv.innerHTML = `
      <div class="message-content">
        <div class="message-text">${this.escapeHtml(message)}</div>
        <div class="message-time">${this.getCurrentTime()}</div>
      </div>
    `;
    this.messages.appendChild(messageDiv);
    this.scrollToBottom();
  }

  async streamResponse(userMessage) {
    const requestBody = {
      message: userMessage,
      systemPrompt: this.currentSystemPrompt
    };

    const response = await fetch('/stream-chat/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    // Create AI message container
    this.createAIMessage();

    try {
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        // Remove the [DONE] marker if present
        const cleanChunk = chunk.replace(' [DONE]', '');
        if (cleanChunk) {
          this.appendToAIResponse(cleanChunk);
        }
      }
    } finally {
      reader.releaseLock();
      this.currentAIResponse = null;
    }
  }

  appendToAIResponse(text) {
    if (this.currentAIResponse) {
      this.currentAIResponse.textContent += text;
      this.scrollToBottom();
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  scrollToBottom() {
    this.messages.scrollTop = this.messages.scrollHeight;
  }
}

// Initialize the chat when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new StreamChat();
});
