import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState<{ type: string, content: string }[]>([]);
  const [question, setQuestion] = useState('');
  const apiUrl = 'https://e84b-41-225-248-197.ngrok-free.app/ask';

  const sendMessage = async () => {
    if (!question.trim()) return;

    setMessages([
      ...messages,
      { type: 'user', content: question },
      { type: 'bot', content: 'Bot is typing...' },
    ]);

    setQuestion('');

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages.filter(msg => msg.content !== 'Bot is typing...'),
        { type: 'bot', content: data.response || 'No response received.' },
      ]);
    } catch (err) {
      setMessages((prevMessages) => [
        ...prevMessages.filter(msg => msg.content !== 'Bot is typing...'),
        { type: 'bot', content: 'Error contacting API.' },
      ]);
    }
  };

  return (
    <div id="chatbox" style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', maxWidth: '600px', margin: '80px auto', padding: '20px' }}>
      <h2 style={{ backgroundColor: '#278a41', color: '#fff', padding: '15px', textAlign: 'center' }}>🤖 Chatbot Crowdfunding</h2>
      <div id="messages" style={{ height: '400px', overflowY: 'auto', backgroundColor: '#fafafa', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`} style={{ display: 'flex', alignItems: 'flex-start', margin: '10px 0' }}>
            <img src={msg.type === 'user' ? "https://cdn-icons-png.flaticon.com/512/1946/1946429.png" : "https://cdn-icons-png.flaticon.com/512/4712/4712009.png"} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', margin: '0 10px' }} />
            <div className={`bubble ${msg.type === 'user' ? 'user' : 'bot'}`} style={{ maxWidth: '70%', padding: '12px', borderRadius: '15px', background: msg.type === 'user' ? '#d9e2ec' : '#e6f4ea', color: msg.type === 'user' ? '#004d61' : '#2f4f4f', whiteSpace: 'pre-wrap', fontFamily: '"Courier New", Courier, monospace' }}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          style={{ width: '80%', padding: '15px', border: 'none', borderTop: '1px solid #ccc', fontSize: '16px' }}
        />
        <button onClick={sendMessage} style={{ width: '20%', backgroundColor: '#278a41', color: 'white', border: 'none', borderTop: '1px solid #ccc', cursor: 'pointer', fontSize: '16px' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
