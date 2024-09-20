import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  as Router, Route, Routes, Navigate  } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/LoginPage';
import UserRegister from './pages/UserRegister';
import ProtectedPage from './components/ProtectedPage';
import { config } from './config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const TOKEN_KEY = {config};
const isAuthenticated = () => localStorage.getItem('TOKEN_KEY') !== null;

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<UserRegister />} />
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <ProtectedPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
