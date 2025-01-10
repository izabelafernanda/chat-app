import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';
import './Chat.css';  

const Chat = () => {
  const [mensagens, setMensagens] = useState([]);
  const [novaMensagem, setNovaMensagem] = useState('');
  const [usuario] = useState(localStorage.getItem('usuario')); // Recupera o nome do usuário logado
  const navigate = useNavigate(); 

  const carregarMensagens = async () => {
    try {
      const response = await api.get('/messages');
      setMensagens(response.data);
    } catch (error) {
      console.error('Erro ao carregar mensagens', error);
    }
  };

  const enviarMensagem = async () => {
    if (novaMensagem.trim() === '') return;

    try {
      await api.post('/messages', {
        content: novaMensagem,
        sender: usuario,
      });
      setNovaMensagem('');
      carregarMensagens(); 
    } catch (error) {
      console.error('Erro ao enviar mensagem', error);
    }
  };

  useEffect(() => {
    carregarMensagens();
    const intervalo = setInterval(carregarMensagens, 5000); 
    return () => clearInterval(intervalo);
  }, []);

  const voltarTelaInicial = () => {
    navigate('/'); 
  };

  return (
    <div className="chat-container">
      <div className="header">
        <button
          onClick={voltarTelaInicial}
          className="back-button"
        >
          ←
        </button>
        <h2>Bem-vindo, {usuario}! 😁 </h2>
      </div>
      <div className="messages-container">
        {mensagens.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.sender === usuario ? 'sent' : 'received'}`}
          >
            <p className="sender">
              {msg.sender}
            </p>
            <p className="content">{msg.content}</p>
            <p className="timestamp">
              {new Date(msg.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={novaMensagem}
          onChange={(e) => setNovaMensagem(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && enviarMensagem()}
          placeholder="Digite sua mensagem"
        />
        <button onClick={enviarMensagem}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
