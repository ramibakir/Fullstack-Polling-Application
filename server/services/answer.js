import Answer from '../models/answer.js';

export const getAnswerById = async (id) => Answer.findById(id);

// TODO: Add id to list answer for specific question
export const listAnswer = async () => Answer.find();

export const createAnswer = async (data) => Answer.create(data);

export const updateAnswer = async (id, data) =>
  Answer.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: false,
    useFindAndModify: false,
  });

export const removeAnswer = async (id) => {
  const answer = await Answer.findById(id);
  answer.remove();
};
