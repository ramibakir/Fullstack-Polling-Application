import Poll from '../models/poll.js';

export const getPollById = async (id) => {
  Poll.findById(id); // Returns promise
};

export const listPolls = async () => {
  Poll.find();
};

export const createPoll = async (data) => Poll.create(data);
