// Interface.
import { LengthSettings } from "./length-settings.interface";
import { PatternSettings } from "./pattern-settings.interface";
import { ValueSettings } from "./value-settings.interface";
/**
 * @description Represents the settings for a configuration that includes value, length, and pattern validation.
 * @export
 * @interface Settings
 * @template [Value=string] 
 * @template {number} [Length=number] The type of the expected length of the value, also between min and max.
 * @template {number} [Min=number] The type of the minimum length of the value.
 * @template {number} [Max=number] The type of the maximum length of the value.
 * @template {RegExp} [Pattern=RegExp] The type of pattern to match against the value.
 * @extends {ValueSettings<Value>} Extends the ValueSettings interface for value validation.
 * @extends {LengthSettings<Min, Max>} Extends the LengthSettings interface for length validation.
 * @extends {PatternSettings<Pattern>} Extends the PatternSettings interface for pattern validation.
 */
export interface Settings<
  Value = string,
  Length extends number = number,
  Min extends number = number,
  Max extends number = number,
  Pattern extends RegExp = RegExp
> extends
  ValueSettings<Value>,
  LengthSettings<Length, Min, Max>,
  PatternSettings<Pattern> {
}
