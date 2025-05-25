export interface PatternOptions<
  Pattern extends RegExp = RegExp,
> {
  regexp?: Pattern
  lowercase?: boolean;
  uppercase?: boolean;
  numeric?: boolean;
  special?: boolean;
};