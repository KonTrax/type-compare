import './helpers'
import {ExtendsStrict as Target} from '@ktb/type-compare'

//==============================================================================
//=== Setup ===

type  Test   <A, B> =  Target<A, B, TRU, FAL>
const Test = <A, B> () :[Test<A, B>, Test<B, A>] => [ANY, ANY]

//==============================================================================
//=== Special Types ===

namespace Case { type T = any
	// Identical Type
	;[TRU, TRU] = Test<T, T>()

	// Special Types
	;[TRU, TRU] = Test<T, any>()
	;[TRU, TRU] = Test<T, unknown>()
	;[FAL, FAL] = Test<T, never>()

	// Value Types
	;[TRU, TRU] = Test<T, void>()
	;[TRU, TRU] = Test<T, object>()
}

namespace Case { type T = unknown
	// Identical Type
	;[TRU, TRU] = Test<T, T>()

	// Special Types
	;[TRU, TRU] = Test<T, any>()
	;[TRU, TRU] = Test<T, unknown>()
	;[FAL, FAL] = Test<T, never>()

	// Value Types
	;[FAL, TRU] = Test<T, void>()
	;[FAL, TRU] = Test<T, object>()
}

namespace Case { type T = never
	// Identical Type
	;[TRU, TRU] = Test<T, T>()

	// Special Types
	;[FAL, FAL] = Test<T, any>()
	;[FAL, FAL] = Test<T, unknown>()
	;[TRU, TRU] = Test<T, never>()

	// Value Types
	;[FAL, FAL] = Test<T, void>()
	;[FAL, FAL] = Test<T, object>()
}

//==============================================================================
//=== Value Types ===

namespace Case { type T = void
	// Identical Type
	;[TRU, TRU] = Test<T, T>()

	// Special Types
	;[TRU, TRU] = Test<T, any>()
	;[TRU, FAL] = Test<T, unknown>()
	;[FAL, FAL] = Test<T, never>()

	// Value Types
	;[TRU, TRU] = Test<T, void>()
	;[FAL, FAL] = Test<T, object>()
}

namespace Case { type T = object
	// Identical Type
	;[TRU, TRU] = Test<T, T>()

	// Special Types
	;[TRU, TRU] = Test<T, any>()
	;[TRU, FAL] = Test<T, unknown>()
	;[FAL, FAL] = Test<T, never>()

	// Value Types
	;[FAL, FAL] = Test<T, void>()
	;[TRU, TRU] = Test<T, object>()
}

//==============================================================================
//=== Value Types - Literal Unions ===

namespace Case {type T = 'A' | 'B'
	;[TRU, FAL] = Test<T,  string          >()
	;[FAL, TRU] = Test<T,  'A'             >()
	;[TRU, TRU] = Test<T,  'A' | 'B'       >()
	;[TRU, FAL] = Test<T,  'A' | 'B' | 'C' >()
}

//==============================================================================
//=== Value Types - object comparison ===

namespace Case {type T = { a :string, b :string }
	;[TRU, FAL] = Test<T,  {}                                  >()
	;[TRU, FAL] = Test<T,  { a :string }                       >()
	;[TRU, TRU] = Test<T,  { a :string, b :string }            >()
	;[FAL, TRU] = Test<T,  { a :string, b :string, c :string } >()
}

//==============================================================================
//=== Value Types - union - object comparison ===

namespace Case {type T = { a :string, b :string }             | { a :string }
	;[TRU, FAL] = Test<T,  {}                                  >()
	;[TRU, TRU] = Test<T,  { a :string }                       >()
	;[FAL, TRU] = Test<T,  { a :string, b :string }            >()
	;[FAL, TRU] = Test<T,  { a :string, b :string, c :string } >()
}

namespace Case {type T = { a :string, b :string }
	;[TRU, FAL] = Test<T,  {}                                   | { a :string } >()
	;[TRU, FAL] = Test<T,  { a :string }                        | { a :string } >()
	;[TRU, FAL] = Test<T,  { a :string, b :string }             | { a :string } >()
	;[TRU, FAL] = Test<T,  { a :string, b :string, c :string }  | { a :string } >()
}

namespace Case {type T = { a :string, b :string }             | { a :string }
	;[TRU, FAL] = Test<T,  {}                                   | { a :string } >()
	;[TRU, TRU] = Test<T,  { a :string }                        | { a :string } >()
	;[TRU, TRU] = Test<T,  { a :string, b :string }             | { a :string } >()
	;[TRU, TRU] = Test<T,  { a :string, b :string, c :string }  | { a :string } >()
}

//==============================================================================
//=== Value Types - union - mixed comparison ===

namespace Case {type T = { a :string, b :string }             | 'A'
	;[TRU, FAL] = Test<T,  {}                                  >()
	;[FAL, FAL] = Test<T,  { a :string }                       >()
	;[FAL, TRU] = Test<T,  { a :string, b :string }            >()
	;[FAL, TRU] = Test<T,  { a :string, b :string, c :string } >()
}

namespace Case {type T = { a :string, b :string }
	;[TRU, FAL] = Test<T,  {}                                   | 'A' >()
	;[TRU, FAL] = Test<T,  { a :string }                        | 'A' >()
	;[TRU, FAL] = Test<T,  { a :string, b :string }             | 'A' >()
	;[FAL, FAL] = Test<T,  { a :string, b :string, c :string }  | 'A' >()
}

namespace Case {type T = { a :string, b :string }             | 'A'
	;[TRU, FAL] = Test<T,  {}                                   | 'A' >()
	;[TRU, FAL] = Test<T,  { a :string }                        | 'A' >()
	;[TRU, TRU] = Test<T,  { a :string, b :string }             | 'A' >()
	;[FAL, TRU] = Test<T,  { a :string, b :string, c :string }  | 'A' >()
}

//==============================================================================
//=== Value Types - UNSORTED ===

//==============================================================================
