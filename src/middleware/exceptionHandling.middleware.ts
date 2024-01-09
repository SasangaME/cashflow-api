import express, { Request, Response, NextFunction } from 'express';

export function handleExceptions(app: express.Application) {
    return (err: any, req: Request, res: Response, next: NextFunction) => {
        const statusCode = err.statusCode || 500;
        console.error(err.message, err.stack);
        res.status(statusCode).json({ 'message': err.message });
        return;
    }
}