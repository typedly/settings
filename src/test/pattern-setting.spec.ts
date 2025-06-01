import { PatternSetting } from '../interface/pattern';

const patternSetting: PatternSetting<RegExp> = {
  pattern: {
    lowercase: true,
    numeric: true,
    regexp: /^[a-zA-Z0-9_-]+$/,
    special: true,
    uppercase: true,
  },
}

const patternRegExpSetting: PatternSetting<RegExp> = {
  pattern: /^[a-zA-Z0-9_-]+$/
}
