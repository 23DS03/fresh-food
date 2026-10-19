import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import connectDb from './cofig/db.js';

dotenv.config({ path: fileURLToPath(new URL('./.env', import.meta.url)) });

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res)=>{
    res.send('Hello World');
})

const startServer = async () => {
    await connectDb();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer().catch((error) => {
    console.error('Failed to start server:', error.message);
    process.exitCode = 1;
});
