// Interface.
import { LengthOptions } from "./length-options.interface";
/**
 * @description Represents the settings for a length configuration.
 * @export
 * @interface LengthSettings
 * @template {number} [Value=number] The expected length of the value, also between min and max.
 * @template {number} [Min=number] The minimum length of the value.
 * @template {number} [Max=number] The maximum length of the value.
 * @template {object} [Options=Value<Min, Max>] The options for the length settings as enhanced customization.
 */
export interface LengthSettings<
  Value extends number = number,
  Min extends number = number,
  Max extends number = number,
  Options extends object = LengthOptions<Value, Min, Max>
> {
  length: Value | Options;
}
