import express from 'express';

import { listingsController } from './controller';

const router = express.Router();
const {
    index,
} = listingsController;

router.get('/', index);

export const listingsRouter = router;
