


export interface PatternSettings<
  Pattern extends RegExp = RegExp,
> {
  pattern: {
    regexp: Pattern
    lowercase: boolean;
    uppercase: boolean;
    numeric: boolean;
    special: Boolean;
  };
}
