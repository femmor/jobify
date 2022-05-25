import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error('Please provide all required values');
  }

  const user = await User.create({
    name,
    email,
    password,
  });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = (req, res) => {
  res.send('login');
};

const updateUser = (req, res) => {
  res.send('update user');
};

export { register, login, updateUser };
