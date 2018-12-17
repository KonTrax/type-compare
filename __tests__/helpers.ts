// export type TypeDesc <T> = {
// 		__TYPE__      :T
// 		__TYPE_NAME__ :TypeName<T>
// 		__TYPE_BASE__ :BaseType<T, 'SPECIAL'>
// }

export type     TypeDesc <T, U = T> = T

export function TypeDesc <T> ()            :TypeDesc<T>
export function TypeDesc <T> (value  :T)   :TypeDesc<T>
export function TypeDesc <T> (value  :any) :TypeDesc<T>
export function TypeDesc <T> (value ?:T)   :TypeDesc<T>
{ return value! }

export namespace ExpectResult
{//=============================================================================

		export let ANY :ANY = /* ANY */ TypeDesc<ANY>('ANY')
		export let UNK :UNK = /* UNK */ TypeDesc<UNK>('UNK')
		export let NEV :NEV = /* NEV */ TypeDesc<NEV>('NEV')

		export let VAL :VAL = /* VAL */ TypeDesc<VAL>('VAL')

		export let TRU :TRU = /* TRU */ TypeDesc<TRU>('TRU')
		export let FAL :FAL = /* FAL */ TypeDesc<FAL>('FAL')
		export let BOL :BOL = /* BOL */ TypeDesc<BOL>('BOL')

		export function TYP <T> ()             :T
		export function TYP <T> (...args :T[]) :T
		export function TYP <T> (...args :T[]) :T
		{
			if (args.length)
				return (args as [T])[0]
			return null as any
		}

		export type ANY = any
		export type UNK = unknown
		export type NEV = never

		export type VAL = Object

		export type TRU = true
		export type FAL = false
		export type BOL = TRU | FAL

		export type TYP = typeof TYP

		export type Globals = Pick<typeof ExpectResult, keyof typeof ExpectResult>

}//=============================================================================

// const expectResult =
Object.assign(global, ExpectResult)

declare global
{
	export type VAL = ExpectResult.VAL
	export let  VAL  :ExpectResult.VAL

	export type ANY = ExpectResult.ANY
	export let  ANY  :ExpectResult.ANY

	export type UNK = ExpectResult.UNK
	export let  UNK  :ExpectResult.UNK

	export type NEV = ExpectResult.NEV
	export let  NEV  :ExpectResult.NEV

	export type BOL = ExpectResult.BOL
	export let  BOL  :ExpectResult.BOL

	export type TRU = ExpectResult.TRU
	export let  TRU  :ExpectResult.TRU

	export type FAL = ExpectResult.FAL
	export let  FAL  :ExpectResult.FAL

	export type  TYP = ExpectResult.TYP
	export const TYP  :ExpectResult.TYP

	export interface Console {}
	export interface ConsolePlaceholder
	{
		clear () :void

		debug (message ?:any, ...optionalParams :any[]) :void
		error (message ?:any, ...optionalParams :any[]) :void
		info  (message ?:any, ...optionalParams :any[]) :void
		log   (message ?:any, ...optionalParams :any[]) :void
		warn  (message ?:any, ...optionalParams :any[]) :void
		dir   (obj :any, options ?:object) :void

		assert         (value :any, message? :string, ...optionalParams :any[]) :void

		count          (label ?:string) :void
		countReset     (label ?:string) :void

		time           (label ?:string) :void
		timeEnd        (label ?:string) :void

		group          (...label  :any[]) :void
		groupCollapsed () :void
		groupEnd       () :void
	}

	export namespace NodeJS {
		export interface Global extends ExpectResult.Globals {}
	}

	export const global  :NodeJS.Global
	export const console :(
		[Console] extends [Record<'log', Function>]
			? Console
			: ConsolePlaceholder
	)
}

//==============================================================================

export import TYP = ExpectResult.TYP
export default ExpectResult

//==============================================================================
