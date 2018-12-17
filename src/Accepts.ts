import { Extends } from './Extends'

export type Accepts <T1, T2, THEN = T1, ELSE = never> =
		Extends<T2, T1, THEN, ELSE>
