import { Settings } from '../interface';
import { DisplaySelectedSettings } from './display-selected-settings.type';

export type SelectableSettings<
  Display extends readonly (keyof Settings)[],
  Value = string,
  Length extends number = number,
  Min extends number = number,
  Max extends number = number,
  Pattern extends RegExp = RegExp
> = DisplaySelectedSettings<Display, Settings<Value, Length, Min, Max, Pattern>>;
