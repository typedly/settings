import { LengthSettings } from "./length-settings.interface";
import { PatternSettings } from "./pattern-settings.interface";
import { ValueSettings } from "./value-settings.interface";

export interface Settings<
  Value = string,
  Min extends number = number,
  Max extends number = number,
  Pattern extends RegExp = RegExp
> extends
  ValueSettings<Value>,
  LengthSettings<Min, Max>,
  PatternSettings<Pattern> {
}
