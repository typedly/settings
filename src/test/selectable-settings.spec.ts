import { SelectableSettings } from "../type";

export const settings: SelectableSettings<
  ['length', 'value'],
  'abcd1234',
  27,
  34,
  RegExp
> = {
  // LengthSettings
  length: { min: 27, max: 34 },
  // PatternSettings - not allowed
  // pattern: {
  //   lowercase: true,
  //   numeric: true,
  //   regexp: /[a]g/g,
  //   special: true,
  //   uppercase: true,
  // },
  // ValueSettings
  value: 'abcd1234',
}
