/**
 * Equality comparison of `unknown` and `any`
 */
export type EqualsUnknownOrAny <A, B, THEN, ELSE = never> =
		[unknown, unknown] extends [A, B]
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
