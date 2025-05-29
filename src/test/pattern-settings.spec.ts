import { PatternSettings } from '../interface';

const patternSettings: PatternSettings<RegExp> = {
  lowercase: true,
  numeric: true,
  regexp: /^[a-zA-Z0-9_-]+$/,
  special: true,
  uppercase: true,
}
