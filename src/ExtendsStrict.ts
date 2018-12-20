/**
 * Strict type `extends` comparison.
 *
 * Wraps `A` & `B` in [] for comparison
 *
 * Same as builtin `extends` except:
 * - `never` only extends `never`
 */
export type ExtendsStrict <A, B, THEN = A, ELSE = never> =
(
		| // NEV -> 'never' only extends 'never'
		[A] extends [never] ? [B] extends [never] ? THEN : ELSE

		: // VAL | UNK | ANY -> (A >= B)
		[A] extends [B] ? THEN

		: // VAL | UNK | ANY -> (A <  B)
		ELSE
)
