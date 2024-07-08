// Author: Igor Dimitrijević (@igorskyflyer)

type HandlerFn = (this: any, ...args: any[]) => any

export function hook(
  proto: any,
  prop: string,
  handler: HandlerFn,
  replace: boolean = false
): boolean {
  if (!(prop in proto)) {
    return false
  }

  const native: HandlerFn = proto[prop]

  proto[prop] = function (...fnArgs: any[]) {
    if (!replace) {
      native.apply(this, fnArgs)
    }

    return handler.apply(this, fnArgs)
  }

  return true
}
