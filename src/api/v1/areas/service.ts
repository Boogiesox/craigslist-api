import fetch from 'node-fetch';

import { Area } from './types';
import { CL_REF_API_BASE } from '../../../config/constants';

export const areasService = {
    getAreas: async function (): Promise<Array<Area>> {
        return fetch(`${CL_REF_API_BASE}/Areas`)
            .then(res => res.json());
    },
};