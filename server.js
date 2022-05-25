import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('server is working!');
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
