import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = async (userData: { username: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/Auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

export const loginUser = async (userData: { username: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/Auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Erroao tentar logar:', error);
    throw error;
  }
};
