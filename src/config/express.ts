import compression from 'compression';
import bodyParser from 'body-parser';
import { Express } from 'express';

import { APP_PORT } from './settings';

export const setupExpress = (app: Express): void => {
    app.set('port', APP_PORT);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(compression());
};
