import http from 'http';

import { asyncExitHook } from 'exit-hook';

import app from '@/app';
import envConfig from '@/config/env.config';
import { closeDb, connectDb } from '@/config/mongodb.config';

const { APP_HOST, APP_PORT } = envConfig;

export const createServer = async (): Promise<void> => {
  try {
    await connectDb();
    console.info(`Connected to MongoDb Cloud Atlas`);
    const server = http.createServer(app);

    server.listen(APP_PORT, APP_HOST, () => {
      console.info(`Server is running on http://${APP_HOST}:${APP_PORT}`);
    });

    asyncExitHook(
      async () => {
        await closeDb();
        server.close();
        console.info('Server is closed');
      },
      {
        wait: 500,
      },
    );
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

void createServer();
