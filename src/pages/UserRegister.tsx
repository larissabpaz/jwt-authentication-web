import React, { useState } from "react";
import axios from "axios";

export default function UserRegister() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("https://localhost:7105/api/Auth/register", {
        userName,
        email,
        password,
      });
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="container">
      <form className="sign-in-form">
        <h2 className="title">Cadastrar Usuário</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Usuário"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn transparent"
          id="sign-up-btn"
          onClick={handleRegister}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
