import { Response, Request } from 'express';

import { areasService } from './service';
import { clAPIresponseParser } from '../../../middleware/clAPIResponseParser';

export const areasController = {
    index: async function (req: Request, res: Response): Promise<void> {
        const response = await areasService.getAreas();

        clAPIresponseParser(res, response);
    },
};