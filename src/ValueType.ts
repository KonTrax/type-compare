import { IsSpecial } from './is'

/**
 * Value-type guard
 *
 * Returns:
 * - `T`     - value types
 * - `never` - special types
 */
export type ValueType <T, ELSE = never> = IsSpecial<T, ELSE, T>
