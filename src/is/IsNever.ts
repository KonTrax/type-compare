/**
 * Test if `T` is `never` type
 */
export type IsNever <T, THEN, ELSE = never> =
		[T] extends [never]
				? THEN // never
				: ELSE // unknown | any | value
