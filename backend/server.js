import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 8800;

app.listen(port, () => {
    console.clear();
    console.log(`Github Backend running on ${port} 👍`)
})
