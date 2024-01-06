import React, { useState } from 'react';
import ChatBox from './ChatBox.tsx';
import '../App.css';

function App() {
  const [messages, setMessages] = useState<{ user: string; assistant: string }[]>([]);

  const handleSendMessage = async (userMessage: string) => {
    try {
      // Send user message to backend
      const response = await fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from the server');
      }

      const responseData = await response.json();

      // Update messages with user input and AI response
      setMessages([...messages, { user: userMessage, assistant: responseData.response }]);
    } catch (error) {
      console.error('Error while processing user message:', error);
      // Handle error appropriately (e.g., display an error message to the user)
    }
  };

  return (
    <div className="app">
      <ChatBox messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;