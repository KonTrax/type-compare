import './helpers'
import * as _ from '@ktb/type-compare'

namespace Equals { import Target = _.Equals

	type Test <A, B> = Target<A, B, TRU, FAL>;

	// CASE: Identical parameters
	TRU = TYP<Test<ANY,  ANY>>()
	TRU = TYP<Test<UNK,  UNK>>()
	TRU = TYP<Test<NEV,  NEV>>()
	TRU = TYP<Test<void, void>>()
	TRU = TYP<Test<VAL,  VAL>>()

	// CASE: any
	FAL = TYP<Test<ANY, UNK>>() // strict
	FAL = TYP<Test<ANY, NEV>>()
	FAL = TYP<Test<ANY, void>>()
	FAL = TYP<Test<ANY, VAL>>() // strict

	// CASE: unknown
	FAL = TYP<Test<UNK, ANY>>() // strict
	FAL = TYP<Test<UNK, NEV>>()
	FAL = TYP<Test<UNK, void>>()
	FAL = TYP<Test<UNK, VAL>>()

	// CASE: never
	FAL = TYP<Test<NEV, ANY>>()
	FAL = TYP<Test<NEV, UNK>>()
	FAL = TYP<Test<NEV, void>>()
	FAL = TYP<Test<NEV, VAL>>()

	// CASE: void
	FAL = TYP<Test<void, ANY>>()
	FAL = TYP<Test<void, UNK>>()
	FAL = TYP<Test<void, NEV>>()
	FAL = TYP<Test<void, VAL>>()

	// CASE: VALUE
	FAL = TYP<Test<VAL, UNK>>()
	FAL = TYP<Test<VAL, ANY>>() // strict
	FAL = TYP<Test<VAL, NEV>>()
	FAL = TYP<Test<VAL, void>>()
}

namespace EqualValues { import Target = _.EqualValues

	type Test <A, B> = Target<A, B, TRU, FAL>;

	// CASE: Identical parameters
	FAL = TYP<Test<ANY,  ANY>>()
	FAL = TYP<Test<UNK,  UNK>>()
	FAL = TYP<Test<NEV,  NEV>>()
	TRU = TYP<Test<void, void>>()
	TRU = TYP<Test<VAL,  VAL>>()

	// CASE: any
	FAL = TYP<Test<ANY, UNK>>() // strict
	FAL = TYP<Test<ANY, NEV>>()
	FAL = TYP<Test<ANY, void>>()
	FAL = TYP<Test<ANY, VAL>>() // strict

	// CASE: unknown
	FAL = TYP<Test<UNK, ANY>>() // strict
	FAL = TYP<Test<UNK, NEV>>()
	FAL = TYP<Test<UNK, void>>()
	FAL = TYP<Test<UNK, VAL>>()

	// CASE: never
	FAL = TYP<Test<NEV, ANY>>()
	FAL = TYP<Test<NEV, UNK>>()
	FAL = TYP<Test<NEV, void>>()
	FAL = TYP<Test<NEV, VAL>>()

	// CASE: void
	FAL = TYP<Test<void, ANY>>()
	FAL = TYP<Test<void, UNK>>()
	FAL = TYP<Test<void, NEV>>()
	FAL = TYP<Test<void, VAL>>()

	// CASE: VALUE
	FAL = TYP<Test<VAL, UNK>>()
	FAL = TYP<Test<VAL, ANY>>() // strict
	FAL = TYP<Test<VAL, NEV>>()
	FAL = TYP<Test<VAL, void>>()
}
