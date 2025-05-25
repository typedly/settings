import { Settings } from '../interface';

export const settings: Settings<
  'abcd1234',
  number,
  27,
  34,
  RegExp
> = {
  // LengthSettings
  length: { min: 27, max: 34 },
  // PatternSettings
  pattern: {
    lowercase: true,
    numeric: true,
    regexp: /[a]g/g,
    special: true,
    uppercase: true,
  },
  // ValueSettings
  value: 'abcd1234',
}
