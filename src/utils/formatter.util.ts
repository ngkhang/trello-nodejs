import type { ValidationError } from 'joi';

/**
 * Format Joi Validation Error details into a flat key-value object
 * @param errorValidation - `ValidationError` object from Joi schema validation
 * @returns Record mapping field paths to error messages
 *
 * @example
 * ```typescript
 * const schema = Joi.object({ email: Joi.string().email().required() });
 * const { error } = schema.validate({ email: 'invalid' });
 * if (error) {
 *  const formatted = formatJoiErrors(error);
 *  // { 'email': '"email" must be a valid email' }
 * }
 * ```
 */
export const formatJoiErrors = (errorValidation: ValidationError): Record<string, string> =>
  errorValidation.details.reduce(
    (result, { path, message }) => {
      const key = path.join('.');

      if (!result[key]) result[key] = message;
      return result;
    },
    {} as Record<string, string>,
  );
