import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar dados da API
  const fetchData = async () => {
    try {
      // Aqui você faz a chamada para a API. Exemplo com fetch.
      const response = await fetch('/api/financial-data'); // Substitua pelo seu endpoint
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError('Erro ao buscar dados');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Dados Financeiros</h1>

      {/* Exemplo de exibição de dados */}
      {data ? (
        <div>
          <p><strong>Preço:</strong> {data.price}</p>
          <p><strong>P/L:</strong> {data.peRatio}</p>
          <p><strong>Dívida/EBITDA:</strong> {data.debtEbitda}</p>
          {/* Adicione outros dados conforme necessário */}
        </div>
      ) : (
        <p>Nenhum dado disponível</p>
      )}
    </div>
  );
};

export default Home;
