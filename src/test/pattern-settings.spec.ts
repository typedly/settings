import { PatternSettings } from '../interface';

export const patternSettings: PatternSettings<RegExp> = {
  pattern: {
    lowercase: true,
    numeric: true,
    regexp: /^[a-zA-Z0-9_-]+$/,
    special: true,
    uppercase: true,
  },
}

export const patternRegExpSettings: PatternSettings<RegExp> = {
  pattern: /^[a-zA-Z0-9_-]+$/
}
