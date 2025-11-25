import dotenv from 'dotenv';

import type { ProcessEnv } from '@/types/env.type';
import { formatJoiErrors } from '@/utils/formatter.util';
import envValidation from '@/validations/env.validation';

dotenv.config({
  path: ['.env'],
});

const validateEnv = (): ProcessEnv => {
  const result = envValidation.validate(process.env, { abortEarly: false, stripUnknown: true });

  if (result.error) {
    const formattedErrors = formatJoiErrors(result.error);
    console.error('Environment validation failed');
    console.error({
      name: result.error.name,
      errors: formattedErrors,
    });
    process.exit(1);
  }

  return result.value;
};

const envConfig = validateEnv();

export default envConfig;
