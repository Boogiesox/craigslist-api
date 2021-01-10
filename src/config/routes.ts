import { Express } from 'express';

import { V1_PREFIX } from './constants';
import { areasRouter } from '../api/v1/areas';
import { categoriesRouter } from '../api/v1/categories';

export const setupRoutesV1 = (app: Express): void => {
    app.use(`${V1_PREFIX}/areas`, areasRouter);
    app.use(`${V1_PREFIX}/categories`, categoriesRouter);
};
