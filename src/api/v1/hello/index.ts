import express from 'express';

import { helloController } from './controller';

const router = express.Router();
const {
    index,
} = helloController;

router.get('/:id', index);

export const helloRouter = router;
