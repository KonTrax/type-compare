type NEV = never
type UNK = unknown

export type IsValue <T, THEN = T, ELSE = NEV> =
		IsSpecial<T, ELSE, THEN>

export type IsSpecial <T, THEN, ELSE = NEV> =
		[UNK] extends [T]   ? THEN : // unknown | any
		[T]   extends [NEV] ? THEN : // never
		ELSE

export type IsNever <T, THEN, ELSE = NEV> =
		[UNK] extends [T]   ? ELSE : // unknown | any
		[T]   extends [NEV] ? THEN : // never
		ELSE

export type IsUnknownOrAny <T, THEN, ELSE = NEV> =
		[UNK] extends [T]   ? THEN : // unknown | any
		[T]   extends [NEV] ? ELSE : // never
		ELSE

export type IsUnknown <T, THEN, ELSE = NEV> =
		[UNK, keyof T] extends [T, NEV] ? THEN : // unknown
		ELSE

export type IsAny <T, THEN, ELSE = NEV> =
		[UNK, keyof any] extends [T, keyof T] ? THEN : // any
		ELSE
