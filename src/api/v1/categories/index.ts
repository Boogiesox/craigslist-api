import express from 'express';

import { categoriesController } from './controller';

const router = express.Router();
const {
    index,
    category,
} = categoriesController;

router.get('/', index);
router.get('/:id', category);

export const categoriesRouter = router;
