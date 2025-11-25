import dotenv from 'dotenv';

import type { NodeEnv, ProcessEnv } from '@/types/env.type';

const NODE_ENV = (process.env.NODE_ENV || 'development') as NodeEnv;

dotenv.config({
  path: ['.env'],
});

const envConfig: ProcessEnv = {
  NODE_ENV,
  APP_HOST: process.env.APP_HOST || 'localhost',
  APP_PORT: Number(process.env.APP_PORT) || 8017,
};

export default envConfig;
