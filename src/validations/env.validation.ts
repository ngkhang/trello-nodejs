import Joi from 'joi';

import type { ProcessEnv } from '@/types/env.type';
import { nodeEnv } from '@/utils/constants';

const envValidation = Joi.object<ProcessEnv>({
  NODE_ENV: Joi.valid(...Object.values(nodeEnv)),
  APP_HOST: Joi.string().hostname().required(),
  APP_PORT: Joi.number().port().required(),
})
  .unknown(true)
  .prefs({ errors: { label: 'key' } });

export default envValidation;
