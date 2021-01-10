import fetch from 'node-fetch';

import { Category } from './types';
import { CL_REF_API_BASE } from '../../../config/constants';

export const categoriesService = {
    getCategories: async function (): Promise<Array<Category>> {
        return fetch(`${CL_REF_API_BASE}/Categories`)
            .then(res => res.json());
    },
};