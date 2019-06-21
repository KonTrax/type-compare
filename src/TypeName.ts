import { IsAny } from './is/IsAny'

/**
 * Get string literal name of type `T` used by javascript runtime
 *
 * - `void` is considered as `unknown`
 */
export type TypeName <T = any> =
		| T extends string    ? 'string'
		: T extends number    ? 'number'
		: T extends bigint    ? 'bigint'
		: T extends boolean   ? 'boolean'
		: T extends symbol    ? 'symbol'

		: T extends undefined ? 'undefined'

		: T extends Function  ? 'function'
		: T extends null      ? 'object'
		: T extends object    ? 'object'

		: IsAny<T, never, unknown>
