// Interface.
import { LengthOptions } from "./length-options.interface";
/**
 * @description Alias for LengthOptions, representing the settings for a length configuration.
 * @export
 * @interface Length
 * @template {number} [Value=number] The expected length of the value, also between min and max.
 * @template {number} [Min=number] The minimum length of the value.
 * @template {number} [Max=number] The maximum length of the value.
 * @extends {LengthOptions<Value, Min, Max>}
 */
export interface Length<
  Value extends number = number,
  Min extends number = number,
  Max extends number = number
> extends LengthOptions<Value, Min, Max> {}