# AI Streaming Chat with System Prompt

A real-time AI chat application built with Express.js, Pug templates, and OpenAI's streaming API. Users can now set custom system prompts to guide the AI's behavior.

## Features

- **Real-time streaming chat** with OpenAI's GPT-4o-mini model
- **Custom system prompts** - Set instructions to guide AI behavior
- **Persistent system prompts** - Saved in browser localStorage
- **Modern UI** with responsive design
- **Error handling** with user-friendly messages

## System Prompt Feature

The system prompt allows you to customize how the AI responds to your messages. You can:

- **Set behavior instructions** (e.g., "You are a helpful coding assistant")
- **Define response style** (e.g., "Always respond in a friendly, casual tone")
- **Specify expertise areas** (e.g., "You are an expert in JavaScript and Node.js")
- **Set response format** (e.g., "Always provide code examples when relevant")

### How to Use System Prompts

1. Click the "Show" button next to "System Prompt" to expand the section
2. Enter your desired system prompt in the textarea
3. Click "Save" to store the prompt (it will be remembered across sessions)
4. Click "Clear" to remove the current system prompt
5. Start chatting - the AI will follow your system prompt instructions

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000/stream-chat`

## Development

To run in development mode with auto-restart:
```bash
npm run dev
```

## File Structure

- `routes/stream-chat.js` - Backend route handling chat requests
- `views/stream-chat.pug` - Main chat interface template
- `public/javascripts/stream-chat.js` - Frontend chat functionality
- `public/stylesheets/stream-chat.css` - Styling for the chat interface

## API Endpoints

- `GET /stream-chat` - Renders the chat interface
- `POST /stream-chat/stream` - Handles streaming chat requests with system prompts

## Technologies Used

- **Backend**: Express.js, Node.js
- **Frontend**: Vanilla JavaScript, Pug templates
- **Styling**: CSS3 with modern design patterns
- **AI**: OpenAI GPT-4o-mini with streaming
- **Storage**: Browser localStorage for system prompts
