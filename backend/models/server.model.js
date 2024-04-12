import express from 'express';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

import { connMongoDatabase } from './../settings/config.js';
import router from './../routes/index.js';
import './../controllers/passport.js';

export class Server {
    constructor() {
        this.app = express();
        this.host = 'http://localhost';
        this.urlPath = '/api';
        this.port = process.env.PORT || 8500;
        this.directory = path.resolve();

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
        this.app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
        // Initialize Passport!  Also use passport.session() middleware, to support
        // persistent login sessions (recommended).
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.use(express.static(path.join(this.directory, '/frontend/dist')));
    }

    routes() {
        this.app.use(this.urlPath, router);
        this.app.get('*', (_, res = express.response) => res.sendFile(path.join(this.directory, 'frontend', 'dist', 'index.html')));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.clear();
            console.log(`Github Backend running in PORT:${this.port} 👍\n🌐 http://localhost:${this.port}${this.urlPath}`);
        });
    }
}