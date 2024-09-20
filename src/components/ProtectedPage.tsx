import { useEffect, useState } from 'react';
import { protectedRequest } from '../api';

export default function ProtectedPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await protectedRequest('/api/Auth/protected');
        setData(response.data.token);
      } catch (error) {
        console.error('Erro ao acessar a página protegida:', error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div>
      <h2>Página Protegida</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Carregando...</p>}
    </div>
  );
};
