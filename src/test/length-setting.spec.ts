import { LengthSetting } from '../interface';

const lengthSetting: LengthSetting<
  0,  // Value
  27, // Min
  47  // Max
> = {
  length: {
    value: 0,
    min: 27,
    max: 47,
  }
}

const lengthExactSetting: LengthSetting<
  27 // Value
> = {
  length: 27
}
