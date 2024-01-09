import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router } from './route.config';
import { handleExceptions } from '../middleware/exceptionHandling.middleware';

export function configMiddleware(app: express.Application): void {
    app.use(cors({ origin: '*' }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(router);

    app.use(handleExceptions(app));
}
