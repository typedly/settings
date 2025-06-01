// Interface.
import { Length } from "./length.interface";
// Type.
import { OptionalField } from "../../type";
/**
 * @description Represents options for length validation.
 * The length options fields are optional, fields can be omitted by setting them to `undefined` or by not providing them.
 * @export
 * @interface LengthOptions
 * @template {number | undefined} [Value=number | undefined] The expected length of the value, also between min and max.
 * @template {number | undefined} [Min=number | undefined] The minimum length of the value.
 * @template {number | undefined} [Max=number | undefined] The maximum length of the value.
 */
export interface LengthOptions<
  Value extends number | undefined = number | undefined,
  Min extends number | undefined = number | undefined,
  Max extends number | undefined = number | undefined
> extends OptionalField<Length<Value, Min, Max>> {}
