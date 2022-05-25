import User from '../models/User.js';

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'There was an error creating the user' });
  }
};

const login = (req, res) => {
  res.send('login');
};

const updateUser = (req, res) => {
  res.send('update user');
};

export { register, login, updateUser };
