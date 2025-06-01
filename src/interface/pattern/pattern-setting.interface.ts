// Interface.
import { PatternOptions } from "./pattern-options.interface";
/**
 * @description Represents the setting for pattern validation.
 * @export
 * @interface PatternSetting
 * @template {RegExp | string | undefined} [Value=RegExp | string | undefined] The type of the regular expression pattern.
 * @template {object} [Options=PatternOptions<Value>] The type of the options for the pattern as enhanced customization.
 */
export interface PatternSetting<
  Value extends RegExp | string | undefined = RegExp | string | undefined,
  Options extends object = PatternOptions<Value>
> {
  pattern: Value | Options
}
