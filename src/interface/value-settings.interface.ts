/**
 * @description Represents the setting for a value configuration.
 * @export
 * @interface ValueSetting
 * @template Value The type of the value to be validated.
 */
export interface ValueSetting<Value> {
  value: Value | undefined;
}
