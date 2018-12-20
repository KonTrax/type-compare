import './helpers'
import {IsValue as Target} from '@ktb/type-compare'

//==============================================================================
//=== Setup ===

const Test = <T> () :Target<T, TRU, FAL> => ANY

//==============================================================================

FAL = Test<any>()
FAL = Test<unknown>()
FAL = Test<never>()
TRU = Test<void>()
TRU = Test<VAL>()
