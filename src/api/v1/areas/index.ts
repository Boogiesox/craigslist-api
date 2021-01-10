import express from 'express';

import { areasController } from './controller';

const router = express.Router();
const {
    index,
} = areasController;

router.get('/', index);

export const areasRouter = router;
