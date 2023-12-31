import { Request, Response, NextFunction, Router } from 'express';
import { getBuild as getBuildService } from '../services/build.service';
import { BuildDto } from '../models/dtos/build.dto';
import { hasRole, paramMiddleware } from '../middleware/demo.middleware';

async function getBuild(req: Request, res: Response, next: NextFunction) {
    const data: BuildDto = getBuildService();
    res.json(data);
}

export const buildRouter = Router();
buildRouter.get('/', hasRole, paramMiddleware('admin'), getBuild);
