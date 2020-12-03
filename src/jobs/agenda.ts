import { logger } from '../utils/logger';
import schedule from 'node-schedule';

export const register = (): void => {
    schedule.scheduleJob('*/10 * * * * *', () => {
        logger.info('Job running');
    });
};
