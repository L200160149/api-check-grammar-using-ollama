import express from 'express';
import ollama from 'ollama';

const app = express();
const router = express.Router();

app.use(express.json());

router.post('/ask-query', async (req, res) => {
  const { sentence } = req.body;
    console.log('sentence', sentence);
    
  try {
    const response = await ollama.chat({
      model: 'dewaning:latest',
      messages: [{ role: 'user', content: sentence }],
    });

    res.json({ reply: response.message.content });
  } catch (error) {
    res.status(500).send({ error: 'Error interacting with the model' });
  }
});

app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});