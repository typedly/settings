import { Settings } from '../interface/settings.interface';
import { DisplaySelectedSettings } from './display-selected-settings.type';

export type SelectableSettings<
  Display extends readonly (keyof Settings)[],
  Value = string,
  Min extends number = number,
  Max extends number = number,
  Pattern extends RegExp = RegExp
> = DisplaySelectedSettings<Display, Settings<Value, Min, Max, Pattern>>;
