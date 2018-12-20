import './helpers'
import {EqualsStrict as Target} from '@ktb/type-compare'

//==============================================================================
//=== Setup ===

type  Test   <A, B> =  Target<A, B, TRU, FAL>
const Test = <A, B> () :[Test<A, B>, Test<B, A>] => [ANY, ANY]

let TRU :[TRU, TRU]
let FAL :[FAL, FAL]

//==============================================================================
//=== Special Types ===

// CASE: Identical parameters
TRU = Test<ANY,  ANY>()
TRU = Test<UNK,  UNK>()
TRU = Test<NEV,  NEV>()
TRU = Test<void, void>()
TRU = Test<VAL,  VAL>()

// CASE: any
FAL = Test<ANY, UNK>() // strict
FAL = Test<ANY, NEV>()
FAL = Test<ANY, void>()
FAL = Test<ANY, VAL>() // strict

// CASE: unknown
FAL = Test<UNK, ANY>() // strict
FAL = Test<UNK, NEV>()
FAL = Test<UNK, void>()
FAL = Test<UNK, VAL>()

// CASE: never
FAL = Test<NEV, ANY>()
FAL = Test<NEV, UNK>()
FAL = Test<NEV, void>()
FAL = Test<NEV, VAL>()

// CASE: void
FAL = Test<void, ANY>()
FAL = Test<void, UNK>()
FAL = Test<void, NEV>()
FAL = Test<void, VAL>()

// CASE: VALUE
FAL = Test<VAL, UNK>()
FAL = Test<VAL, ANY>() // strict
FAL = Test<VAL, NEV>()
FAL = Test<VAL, void>()

//==============================================================================
