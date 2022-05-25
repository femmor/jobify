import express from 'express';
import dotenv from 'dotenv';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import expressAsyncErrors from 'express-async-errors';
import connectDb from './db/connect.js';
import authRoutes from './routes/authRoute.js';
import jobRoutes from './routes/jobRoutes.js';

const app = express();
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('server is working!');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', jobRoutes);

// Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;

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
