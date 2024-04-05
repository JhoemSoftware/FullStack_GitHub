import express from 'express'
const router = express.Router();

import healthRoutes from './health.routes.js';
import userRoutes from './user.routes.js';
import exploreRoutes from './explore.routes.js';

router
    .use('/', healthRoutes)
    .use('/health/', healthRoutes)
    .use('/users', userRoutes)
    .use('/explore', exploreRoutes)
//.use('/auth', require('./auth'))

export default router;