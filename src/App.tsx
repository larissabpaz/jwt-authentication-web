import './App.css';
import { useNavigate } from 'react-router-dom';
import "./style/LoginPage.css"; 

function App() {
  const navigate = useNavigate();
  return (
    <div className="container">
    <div className="panels-container">
        <div className="panel">
          <div className="content">
            <h3>Novo Aqui?</h3>
            <p>
              Venha fazer parte do nosso time. 
            </p>
            <p>
              Para começar sua jornada, por favor, clique no botão abaixo.
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => navigate('/register')}>
              Cadastre-se
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel">
          <div className="content">
            <h3>Já é um de nós?</h3>
            <p>
              Para entrar na sua conta, clique no botão abaixo.
            </p>
            <button className="btn transparent" onClick={() => navigate('/login')}>
              Entrar
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
      </div>
  );
}

export default App;
