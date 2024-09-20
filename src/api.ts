import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

interface LoginResponse {
  token: string;
  refreshToken?: string; 
}

interface RefreshResponse {
  token: string;
}

const isTokenExpired = (token: string) => {
  return false; 
};

const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('Refresh token not found');
    }

    const response = await axios.post(`${API_URL}/Auth/refresh`, { refreshToken });
    const refreshData: RefreshResponse = response.data;
    localStorage.setItem('authToken', refreshData.token);
    return refreshData.token;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};

export const loginUser = async (userData: { username: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/Auth/login`, userData);
    const loginData: LoginResponse = response.data;
    localStorage.setItem('authToken', loginData.token);
    if (loginData.refreshToken) {
      localStorage.setItem('refreshToken', loginData.refreshToken);
    }
    return loginData;
  } catch (error) {
    console.error('Erro ao tentar logar:', error);
    throw error;
  }
};

export const protectedRequest = async (url: string) => {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('Token not found');
    }

    if (isTokenExpired(token)) {
      const newToken = await refreshToken();
      localStorage.setItem('authToken', newToken);
    }

    const response = await axios.get(`${API_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao acessar recurso protegido:', error);
    throw error;
  }
};