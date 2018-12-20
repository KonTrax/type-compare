import { IsSpecial } from './IsSpecial'

/**
 * Test if `T` is a value type
 */
export type IsValue <T, THEN = T, ELSE = never> =
		IsSpecial<T, ELSE, THEN>
