// Interface.
import { PatternSettings } from "./pattern-settings.interface";
// Type.
import { OptionalField } from '../src/type/optional-field.type';
/**
 * @description Represents the pattern options for validation settings.
 * @export
 * @interface PatternOptions
 * @template {RegExp | string | undefined} [Value=RegExp | string | undefined] The regular expression pattern to match.
 */
export interface PatternOptions<
  Value extends RegExp | string | undefined = RegExp | string | undefined
> extends OptionalField<PatternSettings<Value>> {}
