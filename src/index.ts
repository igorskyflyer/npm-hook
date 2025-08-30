// Author: Igor Dimitrijević (@igorskyflyer)

import type { Func, KeysOf } from '@igorskyflyer/common-types'

type NativeMethodHook<
  Prototype extends object,
  Method extends KeysOf<Prototype>
> = Prototype[Method] extends Func
  ? (
      this: Prototype,
      native: Prototype[Method],
      ...args: Parameters<Extract<Prototype[Method], Func>>
    ) => ReturnType<Prototype[Method]>
  : never

/**
 * Hooks onto a JavaScript prototype in order to extend, modify or completely replace a given method of it.
 * @param proto A prototype, e.g. `Array.prototype`, `Number.prototype`, etc.
 * @param method A method to hook onto, e.g. 'push' of `Array.prototype`.
 * @param handler A custom function to run when the hooked method is called.
 * @param replace A Boolean that indicates whether the native method's functionality should be replaced completely.
 * @returns A Boolean whether the hooking onto was successful.
 */
export function hook<
  Prototype extends object,
  Method extends KeysOf<Prototype>
>(
  proto: Prototype,
  method: Method,
  handler: NativeMethodHook<Prototype, Method>,
  replace: boolean = false
): boolean {
  if (!(method in proto) || typeof handler !== 'function') {
    return false
  }

  let native: Func = proto[method] as Func

  proto[method] = function (
    this: Prototype,
    ...fnArgs: Parameters<Extract<Prototype[Method], Func>>
  ) {
    if (!replace) {
      native.apply(this, fnArgs)
    }

    native = native.bind(this)

    return handler.apply(this, [native as Prototype[Method], ...fnArgs])
  } as Prototype[Method]

  return true
}
