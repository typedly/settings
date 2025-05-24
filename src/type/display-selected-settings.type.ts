
export type DisplaySelectedSettings<
  K extends readonly (keyof T)[],
  T
> = Pick<T, K[number]>;