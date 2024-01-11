import jwt from 'jsonwebtoken';
import {ApplicationException} from "../exceptions/application.exception";

const JWT_SECRET = process.env.SECRET || "DEFAULT";
const JWT_EXPIRY_TIME = parseInt(process.env.EXPIRY || "300");

export async function createToken(userId: string, username: string): Promise<string> {
    return jwt.sign({id: userId, name: username},
        JWT_SECRET, {expiresIn: JWT_EXPIRY_TIME});
}

export async function verifyToken(token: string) {
    try {
        return jwt.verify(token, 'SECRET_KEY');
    } catch (err: any) {
        throw new ApplicationException(err.message, 401, 100);
    }
}
