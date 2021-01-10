import { Express } from 'express';

import { V1_PREFIX } from './constants';
import { helloRouter } from '../api/v1/hello';

export const setupRoutesV1 = (app: Express): void => {
    app.use(`${V1_PREFIX}/hello`, helloRouter);
};
