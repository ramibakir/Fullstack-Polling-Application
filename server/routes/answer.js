import express from 'express';
import { answerController } from '../controllers/index.js';

const router = express.Router();

// Get answer based on ID
router.get('/:id', answerController.get);
// Get all answers for specific answer
router.get('/', answerController.list);
// Create answers
router.post('/', answerController.create);
// Update answer
router.put('/:id', answerController.update);
// Remove answer
router.delete('/:id', answerController.remove);

export default router;
