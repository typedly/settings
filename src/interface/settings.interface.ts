// Interface.
import { LengthSetting } from "./length-setting.interface";
import { PatternSetting } from "./pattern-setting.interface";
import { ValueSetting } from "./value-settings.interface";
/**
 * @description Represents the settings for a configuration that includes value, length, and pattern validation.
 * @export
 * @interface Settings
 * @template [Value=string] 
 * @template {number} [Length=number | undefined] The type of the expected length of the value, also between min and max.
 * @template {number} [Min=number | undefined] The type of the minimum length of the value.
 * @template {number} [Max=number | undefined] The type of the maximum length of the value.
 * @template {RegExp} [Pattern=RegExp | undefined] The type of pattern to match against the value.
 * @extends {ValueSetting<Value>} Extends the ValueSettings interface for value validation.
 * @extends {LengthSetting<Min, Max>} Extends the LengthSettings interface for length validation.
 * @extends {PatternSetting<Pattern>} Extends the PatternSettings interface for pattern validation.
 */
export interface Settings<
  Value = string,
  Length extends number | undefined = number,
  Min extends number | undefined = number,
  Max extends number | undefined = number,
  Pattern extends RegExp | undefined = RegExp
> extends
  ValueSetting<Value>,
  LengthSetting<Length, Min, Max>,
  PatternSetting<Pattern> {
}
