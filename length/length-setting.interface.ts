// Interface.
import { Length } from "./length.interface";
/**
 * @description Represents the setting for a length configuration with options.
 * @export
 * @interface LengthSetting
 * @template {number | undefined} [Value=number | undefined] The expected length of the value, also between min and max.
 * @template {number | undefined} [Min=number | undefined] The minimum length of the value.
 * @template {number | undefined} [Max=number | undefined] The maximum length of the value.
 * @template {object} [Options=Length<Value, Min, Max>] The options for the length settings as enhanced customization.
 */
export interface LengthSetting<
  Value extends number | undefined = number | undefined,
  Min extends number | undefined = number | undefined,
  Max extends number | undefined = number | undefined,
  Options extends object = Partial<Length<Value, Min, Max>>
> {
  length: Value | Options;
}
