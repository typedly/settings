// Interface.
import { PatternSettings } from "./pattern-settings.interface";
// Type.
import { OptionalField } from '../../type/optional-field.type';
/**
 * @description Represents the pattern options for validation settings.
 * @export
 * @interface PatternOptions
 * @template {RegExp} [Value=RegExp | undefined] The regular expression pattern to match.
 */
export interface PatternOptions<Value extends RegExp | undefined = RegExp> extends OptionalField<PatternSettings<Value>> {}
