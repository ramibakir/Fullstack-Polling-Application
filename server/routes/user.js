import express from 'express';
import { userController } from '../controllers/index.js';

const router = express.Router();

router.post('/', userController.create);
router.get('/:id/polls', userController.listPolls);
router.get('/:email', userController.get);

export default router;
