import { pollService } from '../services/index.js';

export const get = async (req, res, next) => {
  const poll = await pollService.getPollById(req.params.id);
  if (!poll) {
    res.status(404).json({ error: 'No poll found' });
  }
  res.status(200).json(poll);
};
export const list = async (req, res, next) => {
  const result = await pollService.listPolls();
  res.status(200).json({ ...result });
};
export const create = async (req, res, next) => {
  const poll = await pollService.createPoll(req.body);
  res.status(201).json(poll);
};
export const update = async (req, res, next) => {};
export const remove = async (req, res, next) => {};
