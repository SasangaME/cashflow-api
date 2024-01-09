import {Request, Response, NextFunction, Router} from 'express';
import {dummyService, dummyDecode} from "../services/dummy.service";

export async function getDummy(request: Request, response: Response, next: NextFunction) {
    const password: string = request.params.password ?? "password";
    const data = await dummyService();
    response.json(data);
}

export async function decodeJwt(request: Request, response: Response, next: NextFunction) {
    try {
        const token: string = request.params.token ?? "password";
        const data = await dummyDecode(token);
        response.json(data);
    } catch (err) {
        next(err);
    }
}

export const dummyRouter = Router();
dummyRouter.get("/:password", getDummy);
dummyRouter.get('/decode/:token', decodeJwt);