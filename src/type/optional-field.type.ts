// Alias for PartialPick to make it more readable for the package.
export type OptionalField<T, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>;