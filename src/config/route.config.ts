import { Router } from 'express';
import { buildRouter } from '../controllers/build.controller';
import { exceptionRouter } from '../controllers/exception.controller';
import { dummyRouter } from "../controllers/dummy.controller";

export const router = Router();
router.use('/api/build', buildRouter);
router.use('/api/exception', exceptionRouter);
router.use('/api/dummy', dummyRouter);