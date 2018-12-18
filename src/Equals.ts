import { IsNever } from './is'

type NEV = never
type UNK = unknown

/**
 * Strict type equality comparison
 */
export type Equals <A, B, THEN = A, ELSE = never> =
(
		| // (A || B) === NEV
		[A & B] extends [NEV]   ? IsNever<A | B, THEN, ELSE>

		: // (A || B) === UNK | ANY
		[UNK]   extends [A | B] ? UnknownOrAny<A, B, THEN, ELSE>

		: // (A == B) === VAL
		[A, B]  extends [B, A]  ? THEN

		: // (A != B) === ?
		ELSE
)

/**
 * Strict type equality comparison (value types only)
 */
export type EqualValues <A, B, THEN = A, ELSE = never> =
		[A & B] extends [never] ? ELSE : // (A || B) === NEV
		[UNK]   extends [A | B] ? ELSE : // (A || B) === UNK | ANY
		[A, B]  extends [B, A]  ? THEN : // (A == B) === VAL
		/*                     */ ELSE   // (A != B) === ?

/**
 * Equality comparison of `unknown` and `any`
 */
export type UnknownOrAny <A, B, THEN, ELSE = never> =
		[UNK, UNK] extends [A, B]
				? Keys<A, B, THEN, ELSE> // (A || B) === UNK | ANY
				: ELSE                   // (A || B) === ?

/* NOTES
  *
  * Keyof special types
  * - keyof any       === string | number | symbol
  * - keyof unknown   === never
  * - keyof never     === never
  * - keyof void      === never
  *
  * Not all value types has keys
  * - keyof object    === never
  * - keyof {}        === never
  * - keyof null      === never
  * - keyof undefined === never
  */

/**
 * // REVIEW
 */
type Keys <A, B, THEN, ELSE = never> =
		[keyof A, keyof B] extends [keyof B, keyof A]
				? THEN // (keyof A == keyof B) === ?
				: ELSE // (keyof A != keyof B) === ?
