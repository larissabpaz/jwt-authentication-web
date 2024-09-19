import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:7105/api/Auth/login', { userName, password });
      setToken(response.data.token);
      alert('Login bem-sucedido! Token armazenado.');
    } catch (error) {
      alert('Erro ao fazer login.');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="userName" placeholder="UserName" value={userName} onChange={e => setUserName(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegisterRedirect}>Cadastrar Usuário</button>

      {token && (
        <div>
          <h3>Token JWT:</h3>
          <p>{token}</p>
        </div>
      )}
    </div>
  );
};
