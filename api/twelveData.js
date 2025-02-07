export default async function handler(req, res) {
  // Obtenha o ativo como query string, exemplo: ?symbol=AAPL
  const symbol = req.query.symbol || 'AAPL';  // Valor padrão (AAPL)

  // A chave de API para o Twelve Data, você deve armazenar isso nas variáveis de ambiente
  const apiKey = process.env.TWELVE_DATA_API_KEY;

  try {
    // Realize a requisição à API do Twelve Data
    const response = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=${apiKey}`);
    const data = await response.json();

    // Retorne os dados obtidos da API
    res.status(200).json(data);
  } catch (error) {
    // Caso ocorra algum erro, retorne um erro
    res.status(500).json({ error: 'Erro ao buscar dados do Twelve Data' });
  }
}
