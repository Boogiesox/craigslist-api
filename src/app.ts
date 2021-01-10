import express from 'express';
import { setupExpress } from './config/express';
import { handleMissing, handleErrors } from './middleware';
import { setupRoutesV1 } from './config/routes';

const app = express();

setupExpress(app);
setupRoutesV1(app);

app.use(handleMissing);
app.use(handleErrors);

export default app;
