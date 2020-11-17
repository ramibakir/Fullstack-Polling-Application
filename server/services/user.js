import User from '../models/user.js';

export const createUser = async (data) => User.create(data);

export const listUsers = async () => User.find();

export const getUser = async (data) => {
  if (data.email) {
    const user = await User.findOne({ email: data.email });
    return user;
  }
};
