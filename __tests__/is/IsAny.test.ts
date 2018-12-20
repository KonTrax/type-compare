import './helpers'
import {IsAny as Target} from '@ktb/type-compare'

//==============================================================================
//=== Setup ===

const Test = <T> () :Target<T, TRU, FAL> => ANY

//==============================================================================

TRU = Test<any>()
FAL = Test<unknown>()
FAL = Test<never>()
FAL = Test<void>()
FAL = Test<VAL>()
