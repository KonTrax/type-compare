import './helpers'
import {IsValue as Target} from '@ktb/type-compare'

//==============================================================================
//=== Setup ===

const Test = <T> () :Target<T, TRU, FAL> => ANY

//==============================================================================
//=== Tests ===

//==============================================================================
//=== Special Types ===

	FAL = Test<never>()

	FAL = Test<any>()
	FAL = Test<unknown>()

//==============================================================================
//=== Special Value Types ===

	TRU = Test<{}>()

	TRU = Test<void>()

	TRU = Test<VAL>()

//==============================================================================
//=== Unsorted ===

	//=== Non-values ===

	TRU = Test<undefined>()
	TRU = Test<null>()

	//=== Numbers ===

	TRU = Test<number>()
	TRU = Test<Number>()

	TRU = Test< 0>()
	TRU = Test<-0>()
	TRU = Test< 1>()
	TRU = Test<-1>()

	TRU = Test<bigint>()

	//=== Strings ===

	TRU = Test<string>()
	TRU = Test<String>()

	TRU = Test<''>()
	TRU = Test<'abc'>()

	//=== Booleans ===

	TRU = Test<boolean>()

	//=== Functions ===

	TRU = Test<Function>()

	//=== Arrays ===

	TRU = Test<Array<any>>()
	TRU = Test<any[]>()

	//=== Tuples ===

	TRU = Test<[]>()

	TRU = Test<[any ]>()
	TRU = Test<[any?]>()

	//=== Base objects ===

	TRU = Test<object>()
	TRU = Test<Object>()

	//=== Simple objects ===

	TRU = Test<{ a :1 }>()

	//=== Indexed objects ===

	TRU = Test<{ [x :string] :any }>()
	TRU = Test<{ [x :number] :any }>()
	TRU = Test<{ [x :string] :any, [x :number] :any }>()

	//=== Advanced objects ===

	// TRU = Test<{}>()

//==============================================================================
