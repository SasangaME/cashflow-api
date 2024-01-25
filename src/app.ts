import express, {Request, Response, NextFunction} from 'express';
import {configMiddleware} from './config/middleware.config';
import {config} from 'dotenv';
import {dbConnect} from "./config/db.config";

config({path: './env/.env.dev'});

const app = express();

const port = process.env.PORT || 3000;
const message = "Hello World";

configMiddleware(app);

dbConnect();

app.get('/', (req: Request, res: Response) => {
    res.send(`${message}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});