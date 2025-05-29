/**
 * @description Represents the pattern settings for validation.
 * @export
 * @interface PatternSettings
 * @template {RegExp} [Value=RegExp | undefined] The regular expression pattern to match.
 */
export interface PatternSettings<Value extends RegExp | undefined = RegExp> {
  /**
   * @description Represents the regular expression pattern to match.
   * @type {Value}
   */
  regexp: Value;
  
  /**
   * @description Represents the lowercase option for the pattern validation.
   * @type {boolean}
   */
  lowercase: boolean;

  /**
   * @description Represents the uppercase option for the pattern validation.
   * @type {boolean}
   */
  uppercase: boolean;

  /**
   * @description Represents the numeric option for the pattern validation.
   * @type {boolean}
   */
  numeric: boolean;

  /**
   * @description Represents the special option for the pattern validation.
   * @type {boolean}
   */
  special: boolean;
};
