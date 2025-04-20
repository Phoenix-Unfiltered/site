// server.cjs
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  return res.json({ reply: `Frikkie says: Lekker question, boet – "${message}"` });
});

app.listen(PORT, () => {
  console.log(`Frikkie backend running on http://localhost:${PORT}`);
});
