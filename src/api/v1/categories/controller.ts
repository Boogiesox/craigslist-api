import { Response, Request } from 'express';

import { categoriesService } from './service';

export const categoriesController = {
    index: async function (req: Request, res: Response): Promise<void> {
        try {
            const categories = await categoriesService.getCategories();
            res.status(200)
                .json(categories);
        } catch {
            throw Error('Cannot get resource /categories');
        }
    },

    category: async function (req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const categories = await categoriesService.getCategory(id);
            res.status(200)
                .json(categories);
        } catch {
            throw Error('Cannot get resource /categories');
        }
    },
};