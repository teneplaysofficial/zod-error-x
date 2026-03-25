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

/**
 * Formats and optionally prints a Zod validation error.
 *
 * If the provided value is a {@link ZodError}, its issues are converted into a readable string format. Each issue is displayed with its path (if present) followed by the error message.
 *
 * @example
 * ```ts
 * try {
 *   schema.parse(data);
 * } catch (err) {
 *   logZodError(err);
 * }
 * ```
 *
 * @example
 * ```ts
 * const output = logZodError(err, { print: false });
 * console.log(output);
 * ```
 */
export function logZodError(
  e: ZodError | unknown,
  { print = true }: { print?: boolean; includeNonZod?: boolean } = {},
) {}
