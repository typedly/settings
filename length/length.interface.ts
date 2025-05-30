/**
 * @description Represents the concrete settings for a length configuration.
 * The length settings fields are required, but can be omitted by setting them to `undefined`.
 * @export
 * @interface Length
 * @template {number | undefined} [Value=number | undefined] The expected length of the value, also between min and max.
 * @template {number | undefined} [Min=number | undefined] The minimum length of the value.
 * @template {number | undefined} [Max=number | undefined] The maximum length of the value.
 */
export interface Length<
  Value extends number | undefined = number | undefined,
  Min extends number | undefined = number | undefined,
  Max extends number | undefined = number | undefined
> {
  /**
   * @description Represents expected length of the value, also between min and max.
   * @type {Value}
   */
  value: Value;

  /**
   * @description Represents the minimum length of the value.
   * @type {Min}
   */
  min: Min;

  /**
   * @description Represents the maximum length of the value.
   * @type {Max}
   */
  max: Max;
}
