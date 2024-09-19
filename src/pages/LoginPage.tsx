import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../style/LoginPage.css"; 
import '@fortawesome/fontawesome-free/css/all.css';

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
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Login</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Usuário"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <input type="button" value="Login" className="btn solid" onClick={handleLogin} />
            <p className="social-text">Ou entre com redes sociais</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <button className="btn transparent" id="sign-up-btn" onClick={handleRegisterRedirect}>
            Cadastre-se
          </button>

          {token && (
            <div>
              <h3>Token JWT:</h3>
              <p>{token}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
