import bcrypt from 'bcrypt';

const saltRounds: number = 8;

export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, saltRounds);
}

export async function isPasswordValid(requestPassword: string, actualPassword: string): Promise<boolean> {
    return await bcrypt.compare(requestPassword, actualPassword);
}