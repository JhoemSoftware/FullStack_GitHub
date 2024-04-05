import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { connMongoDatabase } from './settings/config.js';
import router from './routes/index.js';

const app = express();
const port = process.env.PORT || 8800;
const path = '/api';

connMongoDatabase();

app.use(cors());
app.use(express.json());

app.use(path, router);

app.listen(port, () => {
    console.clear();
    console.log(`Github Backend running on ${port} 👍\n🌐 http://localhost:${port}${path}`)
});