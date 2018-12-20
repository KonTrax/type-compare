import './helpers'
import {IsSpecial as Target} from '@ktb/type-compare'

//==============================================================================
//=== Setup ===

const Test = <T> () :Target<T, TRU, FAL> => ANY

//==============================================================================

TRU = Test<any>()
TRU = Test<unknown>()
TRU = Test<never>()
FAL = Test<void>()
FAL = Test<VAL>()
