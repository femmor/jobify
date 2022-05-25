import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';

const app = express();

app.get('/', (req, res) => {
  res.send('server is working!');
});

// Middleware
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
