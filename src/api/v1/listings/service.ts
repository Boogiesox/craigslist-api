import fetch from 'node-fetch';

import { CL_HTML_BASE } from '../../../config/constants';

export const listingsService = {
    getListings: async function (): Promise<string> {
        return fetch(`${CL_HTML_BASE}/search`)
            .then(res => res.text())
            .then(html => html);
    },
};