import express from 'express';

import { categoriesController } from './controller';

const router = express.Router();
const {
    index,
} = categoriesController;

router.get('/', index);

export const categoriesRouter = router;
