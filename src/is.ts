type NEV = never
type UNK = unknown

/**
 * Test if `T` is a value type
 */
export type IsValue <T, THEN = T, ELSE = NEV> =
		IsSpecial<T, ELSE, THEN>

/**
 * Test if `T` is a non-value type
 */
export type IsSpecial <T, THEN, ELSE = NEV> =
		[T]   extends [NEV] ? THEN : // never
		[UNK] extends [T]   ? THEN : // unknown | any
		ELSE                         // value

/**
 * Test if `T` is `never` type
 */
export type IsNever <T, THEN, ELSE = NEV> =
		[T] extends [NEV]
				? THEN // never
				: ELSE // unknown | any | value

/**
 * Test if `T` is `unknown` or `any` type
 */
export type IsUnknownOrAny <T, THEN, ELSE = NEV> =
		[UNK] extends [T]
				? THEN // unknown | any
				: ELSE // never | value

/**
 * Test if `T` is `unknown` type
 *
 * - REF: `unknown` vs `any` comparison
 * @see http://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type
 */
export type IsUnknown <T, THEN, ELSE = NEV> =
		[UNK, keyof T] extends [T, NEV]
				? THEN // unknown
				: ELSE // never | any | value

/**
 * Test if `T` is `any` type
 *
 * - REF: `unknown` vs `any` comparison
 * @see http://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type
 */
export type IsAny <T, THEN, ELSE = NEV> =
		[UNK, keyof any] extends [T, keyof T]
				? THEN // any
				: ELSE // never | unknown | value
