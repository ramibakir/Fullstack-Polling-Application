import Poll from '../models/poll.js';

// Returns promise
export const getPollById = async (id) => Poll.findById(id);

export const listPolls = async () =>
  Poll.find()
    .populate('user', ['name', 'email'])
    .populate('answer', 'answerText');

export const createPoll = async (data) => Poll.create(data);

export const updatePoll = async (id, data) =>
  Poll.findByIdAndUpdate(
    id,
    { $push: { answer: data.answer } },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

export const removePoll = async (id) => {
  const poll = await Poll.findById(id);
  poll.remove();
};
