import { EqualsUnknownOrAny } from './EqualsUnknownOrAny'

export {
	// EqualsStrict1 as EqualsStrict
	// EqualsStrict2 as EqualsStrict
	EqualsStrict3 as EqualsStrict
	// EqualsStrict4 as EqualsStrict
}

/**
 * Strict type equality comparison
 *
 * Wraps `A` & `B` in [] for comparison
 *
 * Useful for writing tests for types
 *
 * **Features**:
 * - `never`   only equals `never`
 * - `any`     only equals `any`
 * - `unknown` only equals `unknown`
 */
export type EqualsStrict1 <A, B, THEN = A, ELSE = never> =
(
		| // (A || B) === UNK | ANY
		[unknown] extends [A | B] ? EqualsUnknownOrAny<A, B, THEN, ELSE>

		: // (A == B) === VAL | NEV
		[A, B] extends [B, A] ?

		// Compare keys to diff {} from { prop ?:any }
		[keyof A, keyof B] extends [keyof B, keyof A] ? THEN : ELSE

		: // (A != B) === ?
		ELSE
)

/**
 * Strict type equality comparison
 *
 * Wraps `A` & `B` in [] for comparison
 *
 * Useful for writing tests for types
 *
 * **Features**:
 * - `never`   only equals `never`
 * - `any`     only equals `any`
 * - `unknown` only equals `unknown`
 */
export type EqualsStrict2 <A, B, THEN = A, ELSE = never> =
(
	(<G> () => G extends A ? 1 : 2) extends (<G> () => G extends B ? 1 : 2)
			? THEN : ELSE
)

/**
 * Strict type equality comparison
 *
 * Wraps `A` & `B` in [] for comparison
 *
 * Useful for writing tests for types
 *
 * **Features**:
 * - `never`   only equals `never`
 * - `any`     only equals `any`
 * - `unknown` only equals `unknown`
 */
export type EqualsStrict3 <A, B, THEN = A, ELSE = never> =
(
		(EqualsStrict2<A, B, 1, 0>) extends (1)
			? [A, B] extends [B, A] ? THEN : ELSE
			: (
				[A] extends [any[] | Function] ? ELSE :
				[B] extends [any[] | Function] ? ELSE :
				EqualsStrict1<A, B, THEN, ELSE>
		)
)
