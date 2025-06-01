/**
 * Makes only the specified keys K of type T required, leaving all other fields unchanged.
 * 
 * @template T - The original type
 * @template K - The keys in T to make required
 */
export type RequiredField<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;