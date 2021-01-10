import { Response, Request } from 'express';

import { areasService } from './service';

export const areasController = {
    index: async function (req: Request, res: Response): Promise<void> {
        try {
            const areas = await areasService.getAreas();
            res.status(200)
                .json(areas);
        } catch {
            throw Error('Cannot get resource /areas');
        }
    },
};