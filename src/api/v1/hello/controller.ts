import { Response, Request } from 'express';

import { helloService } from './service';

export const helloController = {
    index: async function (req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const payload = await helloService.getData(id as string);
            res.status(200).json(payload);
        } catch {
            throw Error(`Cannot get resource for id ${id}`);
        }
    },
};