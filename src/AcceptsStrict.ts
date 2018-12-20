import { ExtendsStrict } from './ExtendsStrict'

/**
 * Strict inverted type `extends` comparison.
 *
 * @see ExtendsStrict
 */
export type AcceptsStrict <A, B, THEN = A, ELSE = never> =
		ExtendsStrict<B, A, THEN, ELSE>
