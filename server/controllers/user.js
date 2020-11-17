import { userService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
});

export const listUsers = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const user = await userService.listUsers(id);
  res.status(200).json(user);
});

export const get = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.params;
  const user = await userService.getUser(email);
  res.status(200).json(user);
});
