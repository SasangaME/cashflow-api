import jwt from 'jsonwebtoken';
import {ApplicationException} from "../exceptions/application.exception";

export async function createToken(userId: string, username: string): Promise<string> {
    return jwt.sign({id: userId, name: username},
        'SECRET_KEY', {expiresIn: 2});
}

export async function verifyToken(token: string) {
    try {
        return jwt.verify(token, 'SECRET_KEY');
    } catch (err: any) {
        throw new ApplicationException(err.message, 401, 100);
    }
}
