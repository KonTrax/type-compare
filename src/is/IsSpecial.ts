/**
 * Test if `T` is a non-value type
 */
export type IsSpecial <T, THEN, ELSE = never> =
		[T]       extends [never] ? THEN : // never
		[unknown] extends [T]     ? THEN : // unknown | any
		ELSE                               // value
