import { ZodError } from 'zod';

/**
 * Checks whether a given value is a {@link ZodError}.
 *
 * @returns True if the value is an instance of ZodError, otherwise false.
 *
 *
 * @example
 * ```ts
 * if (isZodError(err)) {
 *   console.log(err.issues);
 * }
 * ```
 */
export function isZodError<T>(
  /** The value to check */
  e: T,
) {
  return e instanceof ZodError;
}
