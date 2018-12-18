import { IsSpecial } from './is'

/**
 * Special-type guard
 *
 * Returns:
 * - `T`     - special types
 * - `never` - value types
 */
export type SpecialType <T, ELSE = never> = IsSpecial<T, T, ELSE>
