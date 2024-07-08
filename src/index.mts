// Author: Igor Dimitrijević (@igorskyflyer)

type HandlerFn = (this: any, ...args: any[]) => any

/**
 * Hooks onto a JavaScript prototype in order to extend, modify or completely replace a given method of it.
 * @param proto a prototype, e.g. `Array.prototype`, `Number.prototype`, etc.
 * @param method a method to hook onto, e.g. 'push' of `Array.prototype`.
 * @param handler a custom function to run when the hooked method is called.
 * @param replace a Boolean indicating whether the prototype method should be replaced completely. Defaults to false.
 * @returns a Boolean whether the hooking onto was successful.
 */
export function hook(
  proto: any,
  method: string,
  handler: HandlerFn,
  replace: boolean = false
): boolean {
  if (!(method in proto)) {
    return false
  }

  const native: HandlerFn = proto[method]

  proto[method] = function (...fnArgs: any[]) {
    if (!replace) {
      native.apply(this, fnArgs)
    }

    return handler.apply(this, fnArgs)
  }

  return true
}
