/**
 * Invert type constraint type(s)
 *
 * Use to:
 * - invert/negate function parameter constraints (example below)
 * - separate non-primitives
 * - separate objects from functions
 *
 * Alias of builtin `Exclude`
 *
 * @param {any} T - Type expected
 * @param {any} U - Type to exclude / negate
 *
 * @example
 *   // Any Non-Function Parameter
 *   const fn = <T extends any> (arg :T & Not<T, Function>) => arg
 *   fn(      123) // OK
 *   fn(() => 123) // ERROR
 */
export type Not <T, U> = Exclude<T, U>
