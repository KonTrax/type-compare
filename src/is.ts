type NEV = never
type UNK = unknown

export type IsValue <T, THEN = T, ELSE = NEV> =
		IsSpecial<T, ELSE, THEN>

export type IsSpecial <T, THEN, ELSE = NEV> =
		[T]   extends [NEV] ? THEN : // never
		[UNK] extends [T]   ? THEN : // unknown | any
		ELSE

export type IsNever <T, THEN, ELSE = NEV> =
		[T]   extends [NEV] ? THEN : // never
		ELSE

export type IsUnknownOrAny <T, THEN, ELSE = NEV> =
		[UNK] extends [T]   ? THEN : // unknown | any
		ELSE

export type IsUnknown <T, THEN, ELSE = NEV> =
		[UNK, keyof T] extends [T, NEV] ? THEN : // unknown
		ELSE

export type IsAny <T, THEN, ELSE = NEV> =
		[UNK, keyof any] extends [T, keyof T] ? THEN : // any
		ELSE
