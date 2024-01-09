import {createToken, verifyToken} from "../utils/jwt.util";

export async function dummyService(): Promise<string> {
    return await createToken('user1', 'sasanga');
}

export async function dummyDecode(token: string) {
    return await verifyToken(token);
}

