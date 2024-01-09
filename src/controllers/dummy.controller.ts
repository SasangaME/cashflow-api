import {Request, Response, NextFunction, Router} from 'express';
import {dummyService} from "../services/dummy.service";

export async function getDummy(request: Request, response: Response, next: NextFunction) {
    const password: string = request.params.password ?? "password";
    const data = await dummyService(password);
    response.json(data);
}

export const dummyRouter = Router();
dummyRouter.get("/:password", getDummy);