import express from 'express';
import { healthCheck, welcomePage } from '../controllers/health.controller.js';

const router = express.Router();

router.get('/', welcomePage);
router.get('/state/:url', healthCheck);

export default router;