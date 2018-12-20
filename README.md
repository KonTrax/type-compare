# @ktb/type-compare

A collection of comparison utility types for Typescript.

**! This package is type declarations only !**

## Install

```
$ npm install @ktb/type-compare
```

## Usage

```ts
import * as TC from '@ktb/type-compare'

const noop = () :any => {}

let TRU :TRU; type TRU = true
let FAL :FAL; type FAL = false

const Equals = noop as <A, B> () => TC.Equals  <A, B, TRU, FAL>

// never only equal to never
TRU = Equals<never, never>()
FAL = Equals<never, any>()

TRU = Equals<object, object>()
FAL = Equals<object, never>()
FAL = Equals<object, any>()

const Extends = noop as <A, B> () => TC.Extends <A, B, TRU, FAL>

// never only extends never
TRU = Extends<never, never>()
FAL = Extends<never, any>()

FAL = Extends<'A', never>()
TRU = Extends<'A', any>()
TRU = Extends<'A', string>()
TRU = Extends<'A', 'A'>()
TRU = Extends<'A', 'A' | 'B'>()

const Accepts = noop as <A, B> () => TC.Accepts <A, B, TRU, FAL>

// never only accepts never
TRU = Accepts<never, never>()
FAL = Accepts<never, any>()

FAL = Accepts<'A', never>()
TRU = Accepts<'A', any>()
FAL = Accepts<'A', string>()
TRU = Accepts<'A', 'A'>()
FAL = Accepts<'A', 'A' | 'B'>()
```