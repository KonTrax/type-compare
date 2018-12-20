/**
 * Test if `T` is `unknown` or `any` type
 */
export type IsUnknownOrAny <T, THEN, ELSE = never> =
		[unknown] extends [T]
				? THEN // unknown | any
				: ELSE // never | value
