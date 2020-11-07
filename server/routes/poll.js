import express from 'express';
import { pollController } from '../controllers/index.js';

const router = express.Router();

// Get poll based on ID
router.get('/:id', pollController.get);
// Get all polls
router.get('/', pollController.list);
// Create polls
router.post('/', pollController.create);
// Update poll
router.put('/:id', pollController.update);
// Remove polls
router.delete('/:id', pollController.remove);

export default router;
