/**
 * @description Represents options for length validation.
 * @export
 * @interface Length
 * @template {number} [Value=number] The expected length of the value, also between min and max.
 * @template {number} [Min=number] The minimum length of the value.
 * @template {number} [Max=number] The maximum length of the value.
 */
export interface LengthOptions<
  Value extends number = number,
  Min extends number = number,
  Max extends number = number
> {
  
  /**
   * @description Represents expected length of the value, also between min and max.
   * @type {?Value}
   */
  value?: Value;

  /**
   * @description Represents the minimum length of the value.
   * @type {?Min}
   */
  min?: Min;

  /**
   * @description Represents the maximum length of the value.
   * @type {?Max}
   */
  max?: Max;
}
