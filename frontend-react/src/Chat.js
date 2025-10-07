import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { sender: 'ai', text: data.response }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { sender: 'ai', text: 'Error contacting backend.' }]);
    }
    setInput('');
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', border: '1px solid #ccc', borderRadius: 8, padding: 16 }}>
      <h2>React Chatbot</h2>
      <div style={{ minHeight: 200, marginBottom: 16 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <b>{msg.sender === 'user' ? 'You' : 'AI'}:</b> {msg.text}
          </div>
        ))}
        {loading && <div>AI is typing...</div>}
      </div>
      <form onSubmit={sendMessage} style={{ display: 'flex', gap: 8 }}>
        <input value={input} onChange={e => setInput(e.target.value)} disabled={loading} style={{ flex: 1 }} />
        <button type="submit" disabled={loading || !input.trim()}>Send</button>
      </form>
    </div>
  );
}

export default Chat;
