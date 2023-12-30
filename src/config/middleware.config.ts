import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router } from './route.config';

export function configMiddleware(app: express.Application): void {
    app.use(cors({ origin: '*' }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(router);

    app.use(handleExceptions(app));

}

function handleExceptions(app: express.Application) {
    return (err: any, req: Request, res: Response, next: NextFunction) => {
        const statusCode = err.statusCode || 500;
        console.error(err.message, err.stack);
        res.status(statusCode).json({ 'message': err.message });
        return;
    }
}