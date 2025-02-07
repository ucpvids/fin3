export default async function handler(req, res) {
  const symbol = req.query.symbol || 'AAPL'; // Exemplo de ativo (AAPL)
  const apiKey = process.env.TWELVE_DATA_API_KEY;

  try {
    const response = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=${apiKey}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Twelve Data' });
  }
}
