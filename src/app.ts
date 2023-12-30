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

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });
    return;
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});