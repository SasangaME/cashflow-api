import express, { Request, Response, NextFunction, Router } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { buildRouter } from './controllers/build.controller';

// set env configs here

const app = express();
const port = 3000;
const message = "Hello World";

app.use(cors({ origin: '*' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export const router = Router();
router.use('/api/build', buildRouter);
app.use(router);

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