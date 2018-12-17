/**
 * Filter out (exclude) type(s)
 *
 * - Used to further separate non-primitives
 * - Use to separate objects from functions
 * - Alias of 'Exclude'
 *
 * @param {any} T - Type expected
 * @param {any} U - Type to exclude
 *
 * @example
 * function fn <T extends any> (arg :T & Not<T, Function>) :typeof arg { return arg }
 * fn(       { name: 'bob' })  // OK
 * fn(() => ({ name: 'bob' })) // ERROR
 */
export type Not <T, U> = Exclude<T, U>
