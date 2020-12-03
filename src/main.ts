import dotenv from 'dotenv';
import * as Sentry from '@sentry/node';

import { logger } from './utils/logger';
import { register } from './jobs/agenda';

// Init Sentry & Capture Global Error
Sentry.init({ dsn: process.env.SENTRY });

register();
logger.info('Application running...');
