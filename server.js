import express from 'express';
import dotenv from 'dotenv';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import connectDb from './db/connect.js';
import authRoutes from './routes/authRoute.js';
import jobRoutes from './routes/jobRoutes.js';

const app = express();
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('server is working!');
});

// Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', jobRoutes);

const PORT = process.env.PORT || 3005;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
