export type Compact <T> = { [K in keyof T]: T[K] }

export type SafeCompact <T> = T extends Function ? T : Compact<T>
