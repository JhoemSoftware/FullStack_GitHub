import express from 'express';
import getReposExplore from '../controllers/explore.controller.js';

const router = express.Router();

router.get('/repositories/:lang', getReposExplore);

export default router;