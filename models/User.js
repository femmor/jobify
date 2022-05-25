import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      minLength: 3,
      maxLength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email',
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minLength: 6,
    },
    lastName: {
      type: String,
      maxLength: 20,
      trim: true,
      default: 'Last Name',
    },
    location: {
      type: String,
      maxLength: 20,
      trim: true,
      default: 'My City',
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model('User', UserSchema);

export default user;
