import { ApplicationException } from "../exceptions/application.exception";

export function mimicException(statusCode: number): string {
    throw new ApplicationException("this is just to simulate error", statusCode);
}