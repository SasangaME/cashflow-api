import { Request, Response, NextFunction, Router } from 'express';
import { mimicException as mimicExceptionService } from '../services/exception.service';

function mimicException(req: Request, res: Response, next: NextFunction) {
    const statusCode = parseInt(req.params.status) || 500;
    const data = mimicExceptionService(statusCode);
    res.json(data);
}

export const exceptionRouter = Router();
exceptionRouter.use('/:status', mimicException);