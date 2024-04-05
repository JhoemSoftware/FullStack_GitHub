import express from 'express'
const router = express.Router();

import userRoutes from './user.routes.js';
import exploreRoutes from './explore.routes.js';

router
    .use('/users', userRoutes)
    .use('/explore', exploreRoutes)
//.use('/auth', require('./auth'))

export default router;