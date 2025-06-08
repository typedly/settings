// Interface.
import { LengthSetting } from "@typedly/length";
import { PatternSetting } from "@typedly/pattern";
import { ValueSetting } from "./value-setting.interface";
/**
 * @description Represents the settings for a configuration that includes value, length, and pattern validation.
 * @export
 * @interface Settings
 * @template [Value=string] 
 * @template {number | undefined} [Length=number | undefined] The type of the expected length of the value, also between min and max.
 * @template {number | undefined} [Min=number | undefined] The type of the minimum length of the value.
 * @template {number | undefined} [Max=number | undefined] The type of the maximum length of the value.
 * @template {RegExp | string | undefined} [Pattern=RegExp | string | undefined] The type of pattern to match against the value.
 * @extends {ValueSetting<Value>} Extends the `ValueSetting` interface for value validation.
 * @extends {LengthSetting<Min, Max>} Extends the `LengthSetting` interface for length validation.
 * @extends {PatternSetting<Pattern>} Extends the `PatternSetting` interface for pattern validation.
 */
export interface Settings<
  // Fields.
  Value = string,
  Length extends number | undefined = number | undefined,
  Min extends number | undefined = number | undefined,
  Max extends number | undefined = number | undefined,
  Pattern extends RegExp | string | undefined = RegExp | string | undefined,
> extends
  // Fields.
  ValueSetting<Value>,
  LengthSetting<Length, Min, Max>,
  PatternSetting<Pattern> {}
