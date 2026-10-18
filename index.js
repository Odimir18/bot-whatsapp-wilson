const express = require('express');
const app = express();
app.use(express.json());
app.get('/webhook/whatsapp', (req, res) => {
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (req.query['hub.mode'] === 'subscribe' && token === 'Wilson123') {
    return res.status(200).send(challenge);
  }
  res.sendStatus(403);
});
app.post('/webhook/whatsapp', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});
app.get('/', (req, res) => res.send('Bot Wilson Online'));
app.listen(process.env.PORT || 3000, () => console.log('ON'));
