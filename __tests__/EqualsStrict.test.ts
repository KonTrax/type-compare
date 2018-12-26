import './helpers'
import {EqualsStrict as _Target} from '@ktb/type-compare'

//==============================================================================
//=== Setup ===

type Result <AB, BA> = [ AB, BA ]

let TRU :Result<TRU, TRU>
let FAL :Result<FAL, FAL>

type Target <A, B> = _Target<A, B, TRU, FAL>

//==============================================================================
//=== Helpers ===

const Test = <A, B> () :Test<A, B> => ([ANY, ANY] as any)

type  Test <A, B, AB = Target<A, B>, BA = Target<B, A>> = Result<AB, BA>

const expect :Expect = () => (<any> Test())
interface Expect {
	<A> () :{ <B> () :Test<A, B> }
}

//==============================================================================
//=== Special Types ===

	;{const EQ = expect<any>();
		TRU = EQ<ANY>(); /**/ FAL = EQ<UNK>(); /**/ FAL = EQ<NEV>()
		FAL = EQ<VAL>(); /**/ FAL = EQ<void>()
	}
	;{const EQ = expect<unknown>();
		FAL = EQ<ANY>(); /**/ TRU = EQ<UNK>(); /**/ FAL = EQ<NEV>()
		FAL = EQ<VAL>(); /**/ FAL = EQ<void>()
	}
	;{const EQ = expect<never>();
		FAL = EQ<ANY>(); /**/ FAL = EQ<UNK>(); /**/ TRU = EQ<NEV>()
		FAL = EQ<VAL>(); /**/ FAL = EQ<void>()
	}
	;{const EQ = expect<VAL>();
		FAL = EQ<ANY>(); /**/ FAL = EQ<UNK>(); /**/ FAL = EQ<NEV>()
		TRU = EQ<VAL>(); /**/ FAL = EQ<void>()
	}
	;{const EQ = expect<void>();
		FAL = EQ<ANY>(); /**/ FAL = EQ<UNK>(); /**/ FAL = EQ<NEV>()
		FAL = EQ<VAL>(); /**/ TRU = EQ<void>()
	}

//==============================================================================
//=== Special Types - Tuples ===

	;{const EQ = expect<[any]>();
		TRU = EQ<[ANY]>(); /**/ FAL = EQ<[UNK]>(); /**/ FAL = EQ<[NEV]>()
		FAL = EQ<[VAL]>(); /**/ FAL = EQ<[void]>()
	}
	;{const EQ = expect<[unknown]>();
		FAL = EQ<[ANY]>(); /**/ TRU = EQ<[UNK]>(); /**/ FAL = EQ<[NEV]>()
		FAL = EQ<[VAL]>(); /**/ FAL = EQ<[void]>()
	}
	;{const EQ = expect<[never]>();
		FAL = EQ<[ANY]>(); /**/ FAL = EQ<[UNK]>(); /**/ TRU = EQ<[NEV]>()
		FAL = EQ<[VAL]>(); /**/ FAL = EQ<[void]>()
	}
	;{const EQ = expect<[VAL]>();
		FAL = EQ<[ANY]>(); /**/ FAL = EQ<[UNK]>(); /**/ FAL = EQ<[NEV]>()
		TRU = EQ<[VAL]>(); /**/ FAL = EQ<[void]>()
	}
	;{const EQ = expect<[void]>();
		FAL = EQ<[ANY]>(); /**/ FAL = EQ<[UNK]>(); /**/ FAL = EQ<[NEV]>()
		FAL = EQ<[VAL]>(); /**/ TRU = EQ<[void]>()
	}

//==============================================================================
//=== Special Types - Arrays ===

	;{const EQ = expect<any[]>();
		TRU = EQ<ANY[]>(); /**/ FAL = EQ<UNK[]>(); /**/ FAL = EQ<NEV[]>()
		FAL = EQ<VAL[]>(); /**/ FAL = EQ<void[]>()
	}
	;{const EQ = expect<unknown[]>();
		FAL = EQ<ANY[]>(); /**/ TRU = EQ<UNK[]>(); /**/ FAL = EQ<NEV[]>()
		FAL = EQ<VAL[]>(); /**/ FAL = EQ<void[]>()
	}
	;{const EQ = expect<never[]>();
		FAL = EQ<ANY[]>(); /**/ FAL = EQ<UNK[]>(); /**/ TRU = EQ<NEV[]>()
		FAL = EQ<VAL[]>(); /**/ FAL = EQ<void[]>()
	}
	;{const EQ = expect<VAL[]>();
		FAL = EQ<ANY[]>(); /**/ FAL = EQ<UNK[]>(); /**/ FAL = EQ<NEV[]>()
		TRU = EQ<VAL[]>(); /**/ FAL = EQ<void[]>()
	}
	;{const EQ = expect<void[]>();
		FAL = EQ<ANY[]>(); /**/ FAL = EQ<UNK[]>(); /**/ FAL = EQ<NEV[]>()
		FAL = EQ<VAL[]>(); /**/ TRU = EQ<void[]>()
	}

//==============================================================================
//=== Tuples ===

	// CASE: Must have equal length

	FAL = Test<[any], []>()
	TRU = Test<[any], [any]>()
	FAL = Test<[any], [any, any]>()

	// CASE: Correctly handles optional fields - Valid

	TRU = Test<[number, number?], [number, (number)?]>()
	TRU = Test<[number, number?], [number, (number | undefined)?]>()

	// CASE: Correctly handles optional fields - Invalid

	FAL = Test<[number, number?], [number, number]>()
	FAL = Test<[number, number?], [number, number | undefined | null]>()
	FAL = Test<[number, number?], [number, number | undefined]>()
	FAL = Test<[number, number?], [number, number | never]>()
	FAL = Test<[number, number?], [number, number | null]>()

	// CASE: Not equal to Array

	FAL = Test<any[], []>()
	FAL = Test<any[], [any, any]>()

	FAL = Test<[any], any[]>()

	// CASE: Should not match array

	;{type TYP = any;
		FAL = Test<TYP[], [ANY]>(); /**/ FAL = Test<TYP[], [UNK]>()
		FAL = Test<TYP[], [NEV]>(); /**/ FAL = Test<TYP[], [VAL]>()
	}

	;{type TYP = unknown;
		FAL = Test<TYP[], [ANY]>(); /**/ FAL = Test<TYP[], [UNK]>()
		FAL = Test<TYP[], [NEV]>(); /**/ FAL = Test<TYP[], [VAL]>()
	}

	;{type TYP = never;
		FAL = Test<TYP[], [ANY]>(); /**/ FAL = Test<TYP[], [UNK]>()
		FAL = Test<TYP[], [NEV]>(); /**/ FAL = Test<TYP[], [VAL]>()
	}

	// CASE: Extra Special Type tests

	;{type TYP = any;
		TRU = Test<[TYP], [ANY]>(); /**/ TRU = Test<[TYP, TYP], [ANY, ANY]>()
		FAL = Test<[TYP], [UNK]>(); /**/ FAL = Test<[TYP, TYP], [UNK, UNK]>()
		FAL = Test<[TYP], [NEV]>(); /**/ FAL = Test<[TYP, TYP], [NEV, NEV]>()
		FAL = Test<[TYP], [VAL]>(); /**/ FAL = Test<[TYP, TYP], [VAL, VAL]>()
	}

	;{type TYP = unknown;
		FAL = Test<[TYP], [ANY]>(); /**/ FAL = Test<[TYP, TYP], [ANY, ANY]>()
		TRU = Test<[TYP], [UNK]>(); /**/ TRU = Test<[TYP, TYP], [UNK, UNK]>()
		FAL = Test<[TYP], [NEV]>(); /**/ FAL = Test<[TYP, TYP], [NEV, NEV]>()
		FAL = Test<[TYP], [VAL]>(); /**/ FAL = Test<[TYP, TYP], [VAL, VAL]>()
	}

	;{type TYP = never;
		FAL = Test<[TYP], [ANY]>(); /**/ FAL = Test<[TYP, TYP], [ANY, ANY]>()
		FAL = Test<[TYP], [UNK]>(); /**/ FAL = Test<[TYP, TYP], [UNK, UNK]>()
		TRU = Test<[TYP], [NEV]>(); /**/ TRU = Test<[TYP, TYP], [NEV, NEV]>()
		FAL = Test<[TYP], [VAL]>(); /**/ FAL = Test<[TYP, TYP], [VAL, VAL]>()
	}

	;{type TYP = VAL;
		FAL = Test<[TYP], [ANY]>(); /**/ FAL = Test<[TYP, TYP], [ANY, ANY]>()
		FAL = Test<[TYP], [UNK]>(); /**/ FAL = Test<[TYP, TYP], [UNK, UNK]>()
		FAL = Test<[TYP], [NEV]>(); /**/ FAL = Test<[TYP, TYP], [NEV, NEV]>()
		TRU = Test<[TYP], [VAL]>(); /**/ TRU = Test<[TYP, TYP], [VAL, VAL]>()
	}

//==============================================================================
//=== Arrays ===

	// CASE: Works correctly with all variations

	TRU = Test<any[], any[]>()
	TRU = Test<any[], Array<any>>()
	TRU = Test<any[], [...any[]]>()

//==============================================================================
//=== Objects ===

	// CASE:

	FAL = Test<{ prop :true }, {}>()

	// CASE: Empty object should not equal all optional props object

	FAL = Test<{ prop ?:true }, {}>()

	// CASE: Optional object prop should equal itself

	TRU = Test<{ prop ?:true }, { prop ?:true }>()
	TRU = Test<{ prop ?:true }, { prop ?:true | undefined }>()

	// CASE: Optional object prop should not equal required | undefined

	FAL = Test<{ prop ?:true }, { prop :true | undefined }>()

//==============================================================================
//=== Objects: Unions ===

	// CASE: Type should not equal a union of both matching and conflicting types

	FAL = Test<{ b :0 }, { a :0, b :0 } | { b :0 }>()

//==============================================================================
//=== Objects: Intersections ===

	// CASE: Matching object and intersection is equal

	TRU = Test<{ x :1 } & { y :2 }, { x :1, y :2 }>()

	// CASE: Matching object and intersection is not equal if any prop types diff

	FAL = Test<{ x :1 } & { y :2 }, { x :1, y :'conflict' }>()

//==============================================================================
;{//=== Functions ===

	//=== FIXTURES ===

	type FN_A  = ()          => string
	type FN_B  = (x :string) => number
	type FN_AB = {
			()          :string
			(x :string) :number
	};
	type FN_BA = {
			(x :string) :number
			()          :string
	};
	type FN_PROPS = {
			kind :'test'
	}
	type FN_W_PROPS = {
			()   :string
			kind :'test'
	};

	// Function - Props: is equal to self
	TRU = Test<FN_W_PROPS, FN_W_PROPS>()

	// Function - Props: Not equal to partial
	FAL = Test<FN_W_PROPS, FN_A>()
	FAL = Test<FN_W_PROPS, FN_PROPS>()

	/// TODO: Currently not possible
	// Function - Props: Match callable type with intersection
	// TRU = Test<FN_W_PROPS, FN_A & FN_PROPS>()
	// TRU = Test<FN_W_PROPS, FN_PROPS & FN_A>()

	/// NOTE: Function overloads and intersections are order-dependent

	// Function - Overload: is equal to self
	TRU = Test<FN_AB, FN_AB>()
	TRU = Test<FN_BA, FN_BA>()

	// Function - Overload: order has to be the same
	FAL = Test<FN_AB, FN_BA>()
	FAL = Test<FN_BA, FN_AB>()

	// Function - Overload: Not equal to matching intersection type
	FAL = Test<FN_AB, FN_B & FN_A>()
	FAL = Test<FN_BA, FN_A & FN_B>()

	// Function - Overload: Not equal to matching intersection type in the same order
	FAL = Test<FN_AB, FN_A & FN_B>()
	FAL = Test<FN_BA, FN_B & FN_A>()

	// Function - Intersection: TRU - same signatures - same order
	TRU = Test<FN_A & FN_B, FN_A & FN_B>()
	TRU = Test<FN_B & FN_A, FN_B & FN_A>()

	// Function - Intersection: TRU - same signatures - diff order
	TRU = Test<FN_A & FN_B, FN_B & FN_A>()
	TRU = Test<FN_B & FN_A, FN_A & FN_B>()

	// Function - Intersection: FAL - vs partial
	FAL = Test<FN_A & FN_B, FN_A>()
	FAL = Test<FN_A & FN_B, FN_B>()

	FAL = Test<FN_B & FN_A, FN_A>()
	FAL = Test<FN_B & FN_A, FN_B>()

}//=============================================================================
