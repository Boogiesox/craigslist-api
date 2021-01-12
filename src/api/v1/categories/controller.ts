import { Response, Request } from 'express';

import { categoriesService } from './service';
import { clAPIresponseParser } from '../../../middleware/clAPIResponseParser';

export const categoriesController = {
    index: async function (req: Request, res: Response): Promise<void> {
        const response = await categoriesService.getCategories();

        clAPIresponseParser(res, response);
    },

    category: async function (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const response = await categoriesService.getCategory(id);

        clAPIresponseParser(res, response);
    },
};