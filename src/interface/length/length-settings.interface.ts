// Interface.
import { Length } from './length.interface';
/**
 * @description Alias name for `Length` interface.
 * @export
 * @interface LengthSettings
 * @template {number | undefined} [Value=number | undefined] The expected length of the value, also between min and max.
 * @template {number | undefined} [Min=number | undefined] The minimum length of the value.
 * @template {number | undefined} [Max=number | undefined] The maximum length of the value.
 * @extends {Length<Value, Min, Max>}
 */
export interface LengthSettings<
  Value extends number | undefined = number | undefined,
  Min extends number | undefined = number | undefined,
  Max extends number | undefined = number | undefined
> extends Length<Value, Min, Max> {}
