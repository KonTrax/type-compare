export type TypeName <T = any> =
		| T extends string    ? 'string'
		: T extends number    ? 'number'
		: T extends boolean   ? 'boolean'
		: T extends symbol    ? 'symbol'

		: T extends undefined ? 'undefined'

		: T extends Function  ? 'function'
		:                       'object'
