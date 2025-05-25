// Interface.
import { Settings } from '../interface';
// Type.
import { DisplaySelectedSettings } from './display-selected-settings.type';
/**
 * @description Represents the selectable settings for a configuration that includes value, length, and pattern validation.
 * @export
 * @template {readonly (keyof Settings)[]} Display Selected settings to be displayed.
 * @template [Value=string] The type of the value to be validated, defaults to string.
 * @template {number} [Length=number] The type of the length of the value, defaults to number.
 * @template {number} [Min=number] The type of the minimum length of the value, defaults to number.
 * @template {number} [Max=number] The type of the maximum length of the value, defaults to number.
 * @template {RegExp} [Pattern=RegExp] The type of pattern to match against the value, defaults to RegExp.
 */
export type SelectableSettings<
  Display extends readonly (keyof Settings)[],
  Value = string,
  Length extends number = number,
  Min extends number = number,
  Max extends number = number,
  Pattern extends RegExp = RegExp
> = DisplaySelectedSettings<Display, Settings<Value, Length, Min, Max, Pattern>>;
