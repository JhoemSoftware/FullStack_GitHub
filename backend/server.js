import express, { response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user.routes.js'

const app = express();
const port = process.env.PORT || 8800;

app.get('/', (_, res = response) => {
    res.send({
        message: "Github Backend running 😃"
    })
});

app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.clear();
    console.log(`Github Backend running on ${port} 👍\n🌐 http://localhost:${port}`)
})
