import React, { useState } from 'react';

interface ChatBoxProps {
  messages: { user: string; assistant: string }[];
  onSendMessage: (message: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, onSendMessage }) => {
  const [userMessage, setUserMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (userMessage.trim() !== '') {
      onSendMessage(userMessage);
      setUserMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="messages">
      <h1>My Chat-App</h1>
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <div className="user">{msg.user}</div>
            <div className="assistant">{msg.assistant}</div>
          </div>
        ))}
      </div>
      
      <div className="input-box">
        
        <input
          type="text"
          placeholder="Type your message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;