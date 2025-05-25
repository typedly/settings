import { PatternOptions } from "./pattern-options.interface";

export interface PatternSettings<
  Pattern extends RegExp = RegExp,
  Options extends object = PatternOptions<Pattern>
> {
  pattern: Options
}
