import React, { useState } from 'react';
import './TelaInicial.css';  

const Inicio = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim() !== '') {
      localStorage.setItem('usuario', nome); 
      window.location.href = '/chat'; 
    }
  };

  return (
    <div className="container">
      <h1>Bem-vindo ao Chat da PlanetTech! 🌎🚀</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Inicio;
