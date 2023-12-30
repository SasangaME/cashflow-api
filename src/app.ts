import express, { Request, Response, NextFunction } from 'express';
import { configMiddleware } from './config/middleware.config';

// set env configs here

const app = express();
const port = 3000;
const message = "Hello World";

configMiddleware(app);

app.get('/', (req: Request, res: Response) => {
    res.send(`${message}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});