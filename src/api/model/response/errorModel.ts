export interface BaseError {
    code: string;
}

export interface ServerError {
    error: string;
    message: string;
    statusCode: number;
}
