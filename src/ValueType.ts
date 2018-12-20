import { IsValue } from './is'

/**
 * Value-type guard
 *
 * Returns:
 * - `T`     - value types
 * - `never` - special types
 */
export type ValueType <T, ELSE = never> = IsValue<T, T, ELSE>
