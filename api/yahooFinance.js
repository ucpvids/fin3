import yfinance from 'yfinance';

export default async function handler(req, res) {
  const symbol = req.query.symbol || 'AAPL'; // Exemplo de ativo (AAPL)

  try {
    const data = await yfinance.quote({
      symbols: symbol,
      modules: ['financialData', 'price'],
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Yahoo Finance' });
  }
}
