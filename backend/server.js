import express, { response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { connMongoDatabase } from './settings/config.js';

import userRoutes from './routes/user.routes.js';
import exploreRoutes from './routes/explore.routes.js';

const app = express();
const port = process.env.PORT || 8800;

connMongoDatabase();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/explore', exploreRoutes);

app.get('/', (_, res = response) => {
    res.send({
        message: "Github Backend running 😃"
    })
});

app.listen(port, () => {
    console.clear();
    console.log(`Github Backend running on ${port} 👍\n🌐 http://localhost:${port}`)
})
