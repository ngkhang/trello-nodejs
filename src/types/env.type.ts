export type NodeEnv = 'development' | 'production';

export interface ProcessEnv {
  NODE_ENV: string;
  APP_HOST: string;
  APP_PORT: number;
}
