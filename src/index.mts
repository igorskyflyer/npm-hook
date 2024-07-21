// Author: Igor Dimitrijević (@igorskyflyer)

import type { Func, KeysOf } from '@igor.dvlpr/common-types'

type NativeMethodHook<
  Type extends object,
  Method extends KeysOf<Type>
> = Type[Method] extends Func
  ? (
      this: Type,
      native: Type[Method],
      ...args: any[]
    ) => ReturnType<Type[Method]>
  : never

/**
 * Hooks onto a JavaScript prototype in order to extend, modify or completely replace a given method of it.
 * @param proto A prototype, e.g. `Array.prototype`, `Number.prototype`, etc.
 * @param method A method to hook onto, e.g. 'push' of `Array.prototype`.
 * @param handler A custom function to run when the hooked method is called.
 * @param replace A Boolean that indicates whether the native method's functionality should be replaced completely.
 * @returns A Boolean whether the hooking onto was successful.
 */
export function hook<Prototype extends object, Method extends keyof Prototype>(
  proto: Prototype,
  method: Method,
  handler: NativeMethodHook<Prototype, Method>,
  replace: boolean = false
): boolean {
  if (!(method in proto) || typeof handler !== 'function') {
    return false
  }

  const native: Func = proto[method] as Func

  proto[method] = function (this: Prototype, ...fnArgs: any[]) {
    if (!replace) {
      native.apply(this, fnArgs)
    }

    return handler.apply(this, [native as Prototype[Method], ...fnArgs])
  } as Prototype[Method]

  return true
}
