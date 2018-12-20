/**
 * Test if `T` is `unknown` type
 *
 * - REF: `unknown` vs `any` comparison
 * @see http://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type
 */
export type IsUnknown <T, THEN, ELSE = never> =
		[unknown, keyof T] extends [T, never]
				? THEN // unknown
				: ELSE // never | any | value
