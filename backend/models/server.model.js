import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { connMongoDatabase } from './../settings/config.js';
import router from './../routes/index.js';

export class Server {
    constructor() {
        this.app = express();
        this.host = 'http://localhost';
        this.path = '/api';
        this.port = process.env.PORT || 8800;

        this.connDB();
        this.middlewares();
        this.routes();
    }

    async connDB() {
        await connMongoDatabase();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.path, router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.clear();
            console.log(`Github Backend running in PORT:${this.port} 👍\n🌐 http://localhost:${this.port}${this.path}`);
        });
    }
}