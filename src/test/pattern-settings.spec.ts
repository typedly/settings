import { PatternSetting } from '../interface';

export const patternSettings: PatternSetting<RegExp> = {
  pattern: {
    lowercase: true,
    numeric: true,
    regexp: /^[a-zA-Z0-9_-]+$/,
    special: true,
    uppercase: true,
  },
}

export const patternRegExpSettings: PatternSetting<RegExp> = {
  pattern: /^[a-zA-Z0-9_-]+$/
}
