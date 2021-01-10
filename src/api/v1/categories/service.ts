import fetch from 'node-fetch';

import { Category, CategoryDatum } from './types';
import { CL_REF_API_BASE } from '../../../config/constants';

function categoryFactory(categoryDatum: CategoryDatum): Category {
    return ({
        abbreviation: categoryDatum.Abbreviation,
        categoryID: categoryDatum.CategoryID,
        description: categoryDatum.Description,
        type: categoryDatum.Type,
    });
}

export const categoriesService = {
    getCategories: async function (): Promise<Array<Category>> {
        return fetch(`${CL_REF_API_BASE}/Categories`)
            .then(res => res.json())
            .then(json => json
                .map((categoryDatum: CategoryDatum) => categoryFactory(categoryDatum)));
    },
};