import './helpers'
import {Equals} from '@ktb/type-compare'
import {TypeName as Target} from '@ktb/type-compare'

//==============================================================================
//=== Setup ===

type  Test   <A, B> = Equals<A, B, TRU, FAL>

const Test = (() => ANY) as {
		<EXP>                       () :Test<EXP, Target>
		<EXP, IN, RES = Target<IN>> () :Test<EXP, RES>
		<EXP, IN, RES = Target<IN>> () :Test<EXP, RES>

		<EXP extends any, IN extends any, RES = Target<IN>> (OPTS :{
				EXP :EXP
				IN  :IN
		}) :Test<EXP, RES>

		<EXP, IN, RES = Target<IN>> (exp :EXP, res :IN) :Test<EXP, RES>
}

//==============================================================================
//=== No Arguments ===

;{TRU = Test<EXP>()
	type EXP =
		| 'string'
		| 'number' | 'bigint'
		| 'boolean'
		| 'symbol'
		| 'undefined'
		| 'function'
		| 'object'
}

//==============================================================================
//=== Special Types ===

TRU = Test({} as {
	IN:  never
	EXP: never
})

TRU = Test({} as {
	IN:  unknown
	EXP: unknown
})

TRU = Test({} as {
	IN:  any
	EXP:
		| 'string'
		| 'number' | 'bigint'
		| 'boolean'
		| 'symbol'
		| 'undefined'

		| 'function'
		| 'object'
})

//==============================================================================
//=== Value Types - Primitives ===

namespace Case { type EXP = 'string'; const EXP :EXP = 'string'
		TRU = Test<EXP, string>()

		TRU = Test<EXP, 'abc'>()
		TRU = Test<EXP, ''>()

		TRU = Test(EXP, String(''))

		//=== Enums - String

		enum StringEnum { A = 'A', B = 'B' }
		TRU = Test(EXP, StringEnum.A)
}

namespace Case { type EXP = 'number'; const EXP :EXP = 'number'
		TRU = Test<EXP, number>()

		TRU = Test<EXP,  123>()
		TRU = Test<EXP,    0>()
		TRU = Test<EXP,   -0>()

		TRU = Test(EXP, Number(0))
		TRU = Test(EXP, Number('0'))

		//=== Notations ===

		TRU = Test<EXP, 0b0010 /*   2 */>() // Binary
		TRU = Test<EXP, 0o020  /*  16 */>() // Octal
		TRU = Test<EXP, 0x100  /* 256 */>() // Hexadecimal

		//=== Enums ===

		// Standard
		enum NumberEnum { A, B }
		TRU = Test(EXP, NumberEnum.A)

		// Binary
		enum BinaryEnum { A = 0b1, B = 0b10 }
		TRU = Test(EXP, BinaryEnum.A)
}

namespace Case { type EXP = 'bigint'; const EXP :EXP = 'bigint'
		TRU = Test<EXP, bigint>()

		TRU = Test<EXP,  123n>()
		TRU = Test<EXP,    0n>()
		TRU = Test<EXP,   -0n>()

		TRU = Test(EXP, BigInt(0))
		TRU = Test(EXP, BigInt('0'))

		//=== Notations ===

		TRU = Test<EXP, 0b0010n /*   2n */>() // Binary
		TRU = Test<EXP, 0o020n  /*  16n */>() // Octal
		TRU = Test<EXP, 0x100n  /* 256n */>() // Hexadecimal
}

namespace Case { type EXP = 'boolean'; const EXP :EXP = 'boolean'
		TRU = Test<EXP, boolean>()

		TRU = Test<EXP, true>()
		TRU = Test<EXP, false>()

		TRU = Test(EXP, Boolean(''))
}

namespace Case { type EXP = 'symbol';
		TRU = Test<EXP, symbol>()
}

namespace Case { type EXP = 'undefined';
		TRU = Test<EXP, undefined>()
}

//==============================================================================
//=== Value Types - Non-Primitives ===

namespace Case { type EXP = 'function';

		//=== Base

		TRU = Test<EXP, Function>()

		//=== Standard-Functions

		TRU = Test<EXP, {     () :void }>()
		TRU = Test<EXP, { new () :String }>()

		//=== Arrow-Functions

		TRU = Test<EXP,     () => void>()
		TRU = Test<EXP, new () => String>()
}

namespace Case { type EXP = 'object';

		//=== Base objects

		TRU = Test<EXP, object>()
		TRU = Test<EXP, Object>()
		TRU = Test<EXP, {}>()

		//=== Null object

		TRU = Test<EXP, null>()

		//=== Arrays

		TRU = Test<EXP, number[]>()

		//=== Tuples

		TRU = Test<EXP, []>()
		TRU = Test<EXP, [1, 2]>()

		//=== Collections

		TRU = Test<EXP, Set<any>>()
		TRU = Test<EXP, Map<string, any>>()

		//=== Other

		TRU = Test<EXP, Promise<any>>()
}

//==============================================================================
//=== Value Types - Fallback & Other ===

namespace Case { type EXP = unknown;

		//=== Void

		TRU = Test<EXP, void>()
}

//==============================================================================
