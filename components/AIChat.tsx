'use client';

import { useState } from 'react';

export default function AIChat() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<string[]>([]);

  const handleSend = () => {
    if (!message) return;
    // Mock AI response tied to the default task
    const aiResponse = `AI Suggestion: Break "${message}" into smaller tasks, like completing the Zocket frontend assignment.`;
    setChat([...chat, `You: ${message}`, aiResponse]);
    setMessage('');
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">AI Assistant</h2>
      <div className="h-64 overflow-y-auto mb-4 p-2 border">
        {chat.map((msg, idx) => (
          <p key={idx} className="text-sm">{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        placeholder="Ask AI for task suggestions..."
      />
      <button onClick={handleSend} className="w-full p-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </div>
  );
}