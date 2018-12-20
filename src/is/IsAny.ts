/**
 * Test if `T` is `any` type
 *
 * - REF: `unknown` vs `any` comparison
 * @see http://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type
 */
export type IsAny <T, THEN, ELSE = never> =
		[unknown, keyof any] extends [T, keyof T]
				? THEN // any
				: ELSE // never | unknown | value
