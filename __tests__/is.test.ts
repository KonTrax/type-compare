import './helpers'
import * as _ from '@ktb/type-compare'

namespace IsValue { import Target = _.IsValue
	FAL = TYP<Target<any,     TRU, FAL>>()
	FAL = TYP<Target<unknown, TRU, FAL>>()
	FAL = TYP<Target<never,   TRU, FAL>>()
	TRU = TYP<Target<void,    TRU, FAL>>()
	TRU = TYP<Target<VAL,     TRU, FAL>>()
}
namespace IsSpecial { import Target = _.IsSpecial
	TRU = TYP<Target<any,     TRU, FAL>>()
	TRU = TYP<Target<unknown, TRU, FAL>>()
	TRU = TYP<Target<never,   TRU, FAL>>()
	FAL = TYP<Target<void,    TRU, FAL>>()
	FAL = TYP<Target<VAL,     TRU, FAL>>()
}

namespace IsNever { import Target = _.IsNever
	FAL = TYP<Target<any,     TRU, FAL>>()
	FAL = TYP<Target<unknown, TRU, FAL>>()
	TRU = TYP<Target<never,   TRU, FAL>>()
	FAL = TYP<Target<void,    TRU, FAL>>()
	FAL = TYP<Target<VAL,     TRU, FAL>>()
}

namespace IsUnknownOrAny { import Target = _.IsUnknownOrAny
	TRU = TYP<Target<any,     TRU, FAL>>()
	TRU = TYP<Target<unknown, TRU, FAL>>()
	FAL = TYP<Target<never,   TRU, FAL>>()
	FAL = TYP<Target<void,    TRU, FAL>>()
	FAL = TYP<Target<VAL,     TRU, FAL>>()
}
namespace IsUnknown { import Target = _.IsUnknown
	FAL = TYP<Target<any,     TRU, FAL>>()
	TRU = TYP<Target<unknown, TRU, FAL>>()
	FAL = TYP<Target<never,   TRU, FAL>>()
	FAL = TYP<Target<void,    TRU, FAL>>()
	FAL = TYP<Target<VAL,     TRU, FAL>>()
}
namespace IsAny { import Target = _.IsAny
	TRU = TYP<Target<any,     TRU, FAL>>()
	FAL = TYP<Target<unknown, TRU, FAL>>()
	FAL = TYP<Target<never,   TRU, FAL>>()
	FAL = TYP<Target<void,    TRU, FAL>>()
	FAL = TYP<Target<VAL,     TRU, FAL>>()
}
