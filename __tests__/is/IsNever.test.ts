import './helpers'
import {IsNever as Target} from '@ktb/type-compare'

//==============================================================================
//=== Setup ===

const Test = <T> () :Target<T, TRU, FAL> => ANY

//==============================================================================
//=== Tests ===

//==============================================================================
//=== Special Types ===

	TRU = Test<never>()

	FAL = Test<any>()
	FAL = Test<unknown>()

//==============================================================================
//=== Special Value Types ===

	FAL = Test<{}>()

	FAL = Test<void>()

	FAL = Test<VAL>()

//==============================================================================
//=== Unsorted ===

	//=== Non-values ===

	FAL = Test<undefined>()
	FAL = Test<null>()

	//=== Numbers ===

	FAL = Test<number>()
	FAL = Test<Number>()

	FAL = Test< 0>()
	FAL = Test<-0>()
	FAL = Test< 1>()
	FAL = Test<-1>()

	FAL = Test<bigint>()

	//=== Strings ===

	FAL = Test<string>()
	FAL = Test<String>()

	FAL = Test<''>()
	FAL = Test<'abc'>()

	//=== Booleans ===

	FAL = Test<boolean>()

	//=== Functions ===

	FAL = Test<Function>()

	//=== Arrays ===

	FAL = Test<Array<any>>()
	FAL = Test<any[]>()

	//=== Tuples ===

	FAL = Test<[]>()

	FAL = Test<[any ]>()
	FAL = Test<[any?]>()

	//=== Base objects ===

	FAL = Test<object>()
	FAL = Test<Object>()

	//=== Simple objects ===

	FAL = Test<{ a :1 }>()

	//=== Indexed objects ===

	FAL = Test<{ [x :string] :any }>()
	FAL = Test<{ [x :number] :any }>()
	FAL = Test<{ [x :string] :any, [x :number] :any }>()

	//=== Advanced objects ===

	// FAL = Test<{}>()

//==============================================================================
