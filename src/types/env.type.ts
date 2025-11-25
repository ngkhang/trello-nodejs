import type { nodeEnv } from '@/utils/constants';

export type NodeEnv = (typeof nodeEnv)[keyof typeof nodeEnv];

export interface ProcessEnv {
  NODE_ENV: NodeEnv;
  APP_HOST: string;
  APP_PORT: number;
}
