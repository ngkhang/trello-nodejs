import { MongoClient, ServerApiVersion } from 'mongodb';

import envConfig from '@/config/env.config';

import type { Db } from 'mongodb';

let mongoDBInstance: Db | undefined;

const mongoClientInstance = new MongoClient(envConfig.DB_MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connectDb = async (): Promise<void> => {
  try {
    await mongoClientInstance.connect();
    mongoDBInstance = mongoClientInstance.db(envConfig.DB_MONGO_NAME);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(message);
  }
};

export const getDb = (): Db => {
  if (!mongoDBInstance) throw new Error('Please connect to database first');
  return mongoDBInstance;
};
