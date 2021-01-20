import { Response, Request } from 'express';

import { listingsService } from './service';
import { clHTMLResponseParser } from '../../../util/clHTMLResponseParser';

export const listingsController = {
    index: async function (req: Request, res: Response): Promise<void> {
        const response = await listingsService.getListings();

        clHTMLResponseParser(res, response);
    },
};