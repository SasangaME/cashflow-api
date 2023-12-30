import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router } from './route.config';

export function configMiddleware(app: express.Application): void {
    app.use(cors({ origin: '*' }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(router);
}