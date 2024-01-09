export class ApplicationException extends Error {
    statusCode: number;
    errorEnum: number

    constructor(message: string, statusCode: number, errorEnum: number) {
        super(message);
        this.statusCode = statusCode;
        this.errorEnum = errorEnum;
    }
}