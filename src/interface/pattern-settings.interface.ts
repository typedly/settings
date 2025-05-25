// Interface.
import { PatternOptions } from "./pattern-options.interface";
/**
 * @description Represents the settings for pattern validation.
 * @export
 * @interface PatternSettings
 * @template {RegExp} [Value=RegExp] The type of the regular expression pattern.
 * @template {object} [Options=PatternOptions<Value>] The type of the options for the pattern as enhanced customization.
 */
export interface PatternSettings<
  Value extends RegExp = RegExp,
  Options extends object = PatternOptions<Value>
> {
  pattern: Value | Options
}
