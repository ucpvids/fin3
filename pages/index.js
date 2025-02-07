import { useState, useEffect } from 'react';

export default function Home() {
  const [ativo, setAtivo] = useState('AAPL');
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/twelveData?symbol=${ativo}`);
      const data = await res.json();
      setDados(data);
    }

    fetchData();
  }, [ativo]);

  if (!dados) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Dados do Ativo {ativo}</h1>
      <p>Preço: {dados.price}</p>
      <p>PL: {dados.financialData.peRatio}</p>
      {/* Exibir outros indicadores */}
    </div>
  );
}
