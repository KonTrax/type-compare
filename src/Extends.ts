export type Extends <T1, T2, THEN = T1, ELSE = never> =
		[T1 & T2] extends [never]   ? ELSE :
		[unknown] extends [T1 | T2] ? ELSE :
		[T1]      extends [T2]      ? THEN : ELSE
