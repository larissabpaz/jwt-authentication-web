import React, { useState } from 'react';
import axios from 'axios';

export default function UserRegister() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('https://localhost:7105/api/Auth/register', { userName, email, password });
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar usuário.');
    }
  };

  return (
    <div>
      <h2>Cadastrar Usuário</h2>
      <input
        type="text"
        placeholder="Nome de Usuário"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
};
