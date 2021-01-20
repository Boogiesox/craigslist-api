import fetch from 'node-fetch';

import { CL_HTML_BASE } from '../../../config/constants';

export const listingsService = {
    getListings: async function (config: any): Promise<string> {
        const {
            offset = 0,
        } = config;

        return fetch(`${CL_HTML_BASE}/search/?s=${offset}`)
            .then(res => res.text())
            .then(html => html);
    },
};