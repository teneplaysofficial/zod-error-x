import { describe, expect, it } from 'vitest';
import z, { ZodError } from 'zod';
import { isZodError } from '@/lib';

describe('isZodError', () => {
  it('returns true for a ZodError instance', () => {
    const schema = z.string();

    let err: unknown;
    try {
      schema.parse(123);
    } catch (e) {
      err = e;
    }

    expect(err).toBeInstanceOf(ZodError);
    expect(isZodError(err)).toBe(true);
  });

  it('returns false for a normal Error', () => {
    const err = new Error('fail');

    expect(isZodError(err)).toBe(false);
  });

  it.each(['string', 123, null, undefined, {}, []])(
    'returns false for non-error value: $0',
    (value) => {
      expect(isZodError(value)).toBe(false);
    },
  );

  it('returns false for Zod-like objects (shape match but not instance)', () => {
    const fake = {
      issues: [{ message: 'fake', path: [] }],
    };

    expect(isZodError(fake)).toBe(false);
  });

  it('returns true only for real ZodError instances', () => {
    const error = new ZodError([]);

    expect(isZodError(error)).toBe(true);
  });
});
