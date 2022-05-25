import mongoose from 'mongoose';

// Connection string
const connectDb = url => {
  return mongoose.connect(url);
};

export default connectDb;
