import { EqualsUnknownOrAny } from './EqualsUnknownOrAny'

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
export type EqualsStrict <A, B, THEN = A, ELSE = never> =
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
