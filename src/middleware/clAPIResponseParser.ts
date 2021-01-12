import { Response } from 'express';

export function clAPIresponseParser(res: Response, response: any): void {
    const { status } = response;

    if (status) {
        res.sendStatus(status);
    } else {
        res.status(200)
            .json(response);
    }
}