


export interface PatternSettings<
  Pattern extends RegExp = RegExp,
> {
  pattern: Pattern;
  lowercase: boolean;
  uppercase: boolean;
  numeric: boolean;
  special: Boolean;
}
