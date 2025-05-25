/**
 * @description The type is used to create a new type that includes only the properties of the original type `T` specified in the tuple `K`.
 * @export
 * @template {readonly (keyof T)[]} K The tuple of keys to select from the type `T`.
 * @template T 
 */
export type DisplaySelectedSettings<
  K extends readonly (keyof T)[],
  T
> = Pick<T, K[number]>;