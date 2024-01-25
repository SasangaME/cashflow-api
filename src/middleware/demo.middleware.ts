import { Request, Response, NextFunction } from 'express';

export async function hasRole(req: Request, res: Response, next: NextFunction) {
    await next();
}

export function paramMiddleware(role: string) {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const roleHeader = req.headers?.role || 'user';
        if (role != roleHeader) {
            const error: ErrorDto = {
                message: 'user is not allowed for this action',
                stackTrace: 'this is a sample field'
            }
            res.status(401).json(error);
        } else {
            next();
        }
    };
}

interface ErrorDto {
    message: string;
    stackTrace: string;
}