import './helpers'
import * as _ from '@ktb/type-compare'

namespace TypeName { import Target = _.TypeName

	type Test <IN, EXP> = _.Equals<IN, EXP, TRU, FAL>

	function Test <EXP, IN> ()                         :Test<IN, EXP>
	function Test <EXP, IN> (opts :{EXP :EXP, IN :IN}) :Test<IN, EXP>
	function Test <EXP, IN> (       EXP :EXP, IN :IN)  :Test<IN, EXP>
	function Test           () :any {}

	//####################

	;{type IN  = never
		type EXP = never
		;    TRU = Test<EXP, Target<IN>>()}

	;{type IN  = unknown
		type EXP = 'object'
		;    TRU = Test<EXP, Target<IN>>()}

	;{type IN  = any
		type EXP =
				| 'string' | 'number' | 'boolean' | 'symbol'
				| 'undefined'
				| 'function' | 'object'
		;    TRU = Test<EXP, Target<IN>>()}

	//####################

	;{type IN  = void
		type EXP = 'object'
		;    TRU = Test<EXP, Target<IN>>()}

	//####################

	;{type IN  = Object
		type EXP = 'object'
		;    TRU = Test<EXP, Target<IN>>()}

	;{type IN  = object
		type EXP = 'object'
		;    TRU = Test<EXP, Target<IN>>()}

	;{type IN  = {}
		type EXP = 'object'
		;    TRU = Test<EXP, Target<IN>>()}

	//####################
}
