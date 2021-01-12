import { Request, Response } from 'express';

import logger from '../util/logger';
import { formatError } from '../util/error';

export const handleErrors = (
    error: Error,
    req: Request,
    res: Response,
): void => {
    logger.error(error.stack);
    res.status(500).json(formatError('Server Error'));
};

export const handleMissing = (req: Request, res: Response): void => {
    res.sendStatus(404);
};
