import { answerService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const answer = await answerService.getAnswerById(req.params.id);
  if (!answer) {
    return next(
      new ErrorHandler(`Cannot find answer with ${req.params.id}`, 404)
    );
  }
  res.status(200).json(answer);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await answerService.listAnswer();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const answer = await answerService.createAnswer(req.body);
  res.status(201).json(answer);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let answer = await answerService.getAnswerById(req.params.id);
  if (!answer) {
    return next(
      new ErrorHandler(`Can not find answer with ${req.params.id}`, 404)
    );
  }
  answer = await answerService.updateAnswer(req.params.id, req.body);
  res.status(200).json(answer);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let answer = await answerService.getAnswerById(req.params.id);
  if (!answer) {
    return next(
      new ErrorHandler(`Can not find answer with ${req.params.id}`, 404)
    );
  }
  answer = await answerService.removeAnswer(req.params.id);
  res.status(204).json({});
});
