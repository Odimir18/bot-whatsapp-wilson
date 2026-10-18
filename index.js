const express = require('express');
const app = express();
app.use(express.json());
const VERIFY_TOKEN = "aoteam123";
app.get('/', (req, res) => { res.send(`
<html style="background:#000;color:#fff;font-family:sans-serif;text-align:center;padding:50px">
<h1>🤖 AO Team Bot ONLINE</h1>
<h2 style="color:#00ff88">✅ Sistema Ativo 24h</h2>
<p>🇦🇴 Angola - Projeto de Odimir</p>
<p style="margin-top:30px;border:1px solid #333;padding:15px;border-radius:10px">Bot rodando na Vercel - AO Team</p>
</html>
`)});
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return res.status(200).send(challenge);
  }
  res.sendStatus(403);
});
app.post('/webhook', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Rodando'));
