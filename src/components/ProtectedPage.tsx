import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProtectedPage() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7105/api/Auth/protected', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('Erro ao acessar a página protegida:', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div>
      <h2>Página Protegida</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Carregando...</p>}
    </div>
  );
};
