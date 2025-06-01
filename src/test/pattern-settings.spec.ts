import { PatternSettings } from '../../pattern';

const patternSettings: PatternSettings<RegExp> = {
  lowercase: true,
  numeric: true,
  regexp: /^[a-zA-Z0-9_-]+$/,
  special: true,
  uppercase: true,
}
