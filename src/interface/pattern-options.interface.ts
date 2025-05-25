/**
 * @description Represents the pattern options for validation settings.
 * @export
 * @interface PatternOptions
 * @template {RegExp} [Value=RegExp] The regular expression pattern to match.
 */
export interface PatternOptions<Value extends RegExp = RegExp> {
  /**
   * @description Represents the regular expression pattern to match.
   * @type {?Value}
   */
  regexp?: Value;
  
  /**
   * @description Represents the lowercase option for the pattern validation.
   * @type {?boolean}
   */
  lowercase?: boolean;

  /**
   * @description Represents the uppercase option for the pattern validation.
   * @type {?boolean}
   */
  uppercase?: boolean;

  /**
   * @description Represents the numeric option for the pattern validation.
   * @type {?boolean}
   */
  numeric?: boolean;

  /**
   * @description Represents the special option for the pattern validation.
   * @type {?boolean}
   */
  special?: boolean;
};
