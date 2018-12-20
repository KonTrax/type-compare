import './helpers'
import {IsNever as Target} from '@ktb/type-compare'

//==============================================================================
//=== Setup ===

const Test = <T> () :Target<T, TRU, FAL> => ANY

//==============================================================================

FAL = Test<any>()
FAL = Test<unknown>()
TRU = Test<never>()
FAL = Test<void>()
FAL = Test<VAL>()
