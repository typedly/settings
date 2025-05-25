import { PatternSettings } from '../interface';

export const patternSettings: PatternSettings<RegExp> = {
  pattern: {
    lowercase: true,
    numeric: true,
    regexp: /[a]g/g,
    special: true,
    uppercase: true,
  },
}
