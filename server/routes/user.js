import express from 'express';
import { userController } from '../controllers/index.js';

const router = express.Router();

router.post('/', userController.create);
router.get('/', userController.listUsers);
router.get('/:email', userController.get);

export default router;
