import { Response } from 'express';

export function clAPIresponseParser(res: Response, clAPIResponse: any): void {
    const { status } = clAPIResponse;

    if (status) {
        res.sendStatus(status);
    } else {
        res.status(200)
            .json(clAPIResponse);
    }
}