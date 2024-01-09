import {hashPassword} from "../utils/password.util";


export async function dummyService(password: string): Promise<string> {
    return await hashPassword(password);
}

