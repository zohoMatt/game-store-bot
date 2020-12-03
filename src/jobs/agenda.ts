import cron from 'node-cron';
import { logger } from '../utils/logger';

export const register = (): void => {
    cron.schedule('*/10 * * * * *', () => {
        logger.info('Registered');
    });
};
