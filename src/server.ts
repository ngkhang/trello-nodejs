import http from 'http';

import app from '@/app';
import envConfig from '@/config/env.config';

const { APP_HOST, APP_PORT } = envConfig;

const server = http.createServer(app);

server.listen(APP_PORT, APP_HOST, () => {
  console.info(`Server is running on http://${APP_HOST}:${APP_PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.info('Server closed');
    process.exit(0);
  });
});

export default server;
