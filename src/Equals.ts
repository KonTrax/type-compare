export type Equals <T1, T2, THEN = T1, ELSE = never> =
		[T1 & T2] extends [never]   ? ELSE :
		[unknown] extends [T1 | T2] ? ELSE :
		[T1, T2]  extends [T2, T1]  ? THEN : ELSE
