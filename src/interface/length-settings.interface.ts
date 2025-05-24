import { LengthOptions } from "./length-options.interface";


export interface LengthSettings<
  Min extends number = number,
  Max extends number = number
> {
  length: LengthOptions<Min, Max>;
}
