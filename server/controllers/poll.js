import { pollService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const poll = await pollService.getPollById(req.params.id);
  if (!poll) {
    return next(
      new ErrorHandler(`Cannot find poll with ${req.params.id}`, 404)
    );
  }
  res.status(200).json(poll);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await pollService.listPolls();
  res.status(200).json({ ...result });
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const poll = await pollService.createPoll(req.body);
  res.status(201).json(poll);
});

export const update = catchAsyncErrors(async (req, res, next) => {});

export const remove = catchAsyncErrors(async (req, res, next) => {});
