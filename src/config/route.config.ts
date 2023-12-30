import { Router } from 'express';
import { buildRouter } from '../controllers/build.controller';
import { exceptionRouter } from '../controllers/exception.controller';

export const router = Router();
router.use('/api/build', buildRouter);
router.use('/api/exception', exceptionRouter);