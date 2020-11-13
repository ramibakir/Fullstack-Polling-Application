import Poll from '../models/answer.js';
import User from '../models/user.js';

export const createUser = async (data) => User.create(data);

export const listPolls = async (id) => {
  if (id) {
    const polls = await Poll.find({ user: id }).populate('user', 'email');
    return polls;
  }
};
