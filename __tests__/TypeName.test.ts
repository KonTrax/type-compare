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
}

//==============================================================================
//=== No Arguments ===

;{TRU = Test<EXP>()
	type EXP =
		| 'string' | 'number' | 'boolean' | 'symbol'
		| 'undefined'
		| 'function' | 'object'
}

//==============================================================================
//=== Special Types ===

TRU = Test({} as {
	IN:  never
	EXP: never
})

TRU = Test({} as {
	IN:  unknown
	EXP: 'object'
})

TRU = Test({} as {
	IN:  any
	EXP: Target
})

//==============================================================================
//=== Value Types - Primitives ===

namespace Case { type EXP = 'string';
		TRU = Test<EXP, string>()
		TRU = Test<EXP, 'abc'>()
}

namespace Case { type EXP = 'number';
		TRU = Test<EXP, number>()
		TRU = Test<EXP, 123>()
}

namespace Case { type EXP = 'boolean';
		TRU = Test<EXP, boolean>()
		TRU = Test<EXP, true>()
		TRU = Test<EXP, false>()
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
		TRU = Test<EXP, Function>()
		TRU = Test<EXP,     () => {}>()
		TRU = Test<EXP, new () => {}>()
}

namespace Case { type EXP = 'object';
		TRU = Test<EXP, object>()
		TRU = Test<EXP, Object>()
		TRU = Test<EXP, {}>()

		TRU = Test<EXP, void>()
		TRU = Test<EXP, null>()

		TRU = Test<EXP, number[]>()
		TRU = Test<EXP, [1, 2]>()

		TRU = Test<EXP, Set<any>>()
		TRU = Test<EXP, Map<string, any>>()
}

//==============================================================================
