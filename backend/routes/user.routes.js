import express, { response } from 'express';
import getUserProfileAndRepositories from '../controllers/user.controller.js';

const router = express.Router();

router.get('/profile/:username', getUserProfileAndRepositories)

export default router;