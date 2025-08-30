<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-hook/main/media/hook.png" alt="Icon of Hook" width="256" height="256">
  <h1>Hook</h1>
</div>

<br>

<h4 align="center">
  🪝 Hooks onto a JavaScript prototype, either extending or changing its behavior or replacing it completely. 👺
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
    - [hook()](#hook-boolean)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🪝 Prototype hooking - attach custom logic to any existing JavaScript prototype method
- 🔄 Extend or replace - choose to run native behavior first or fully override it
- 🧠 Smart IntelliSense - automatically suggests valid method names for the given prototype and provides full signature hints for parameters and return types
- 🧩 Type-safe - leverages TypeScript generics for precise method and argument typing
- 🛡 Validation built-in - ensures method exists and handler is a function before hooking
- 🪞 Native method access - passes original bound method to your handler for reuse
- ⚡ Reusable utility - works with arrays, numbers, strings, or any object prototype
- 🎯 Minimal API - single `hook()` call with clear, predictable parameters
- 🏗 Non-invasive - modifies only the targeted method without affecting others

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/hook
```

```bash
yarn add @igorskyflyer/hook
```

```bash
npm i @igorskyflyer/hook
```

<br>
<br>

## 🤹🏼 API

> 🛑 **CAUTION**
>
> *Dangerous package*
>
> This package provides ways of modifying the native prototype(s) of built-in JavaScript objects, use it only if you know what you're doing and with **caution** as it may cause unexpected results!
>

<br>

### hook(): boolean

```ts
function hook(
  proto: Prototype,
  method: KeysOf<Prototype>,
  handler: NativeMethodHook<Prototype, Method>,
  replace: boolean = false
): boolean
```

Hooks onto a JavaScript prototype in order to extend, modify or completely replace a given method of it.

<br>

#### `proto`

A prototype, e.g. `Array.prototype`, `Number.prototype`, etc.

<br>

#### `method`

A method to hook onto, e.g. `push` of `Array.prototype`.

<br>

#### `handler`

A custom function to run when the hooked method is called.
The function has the following signature:

```ts
(
  this: Prototype,
  native: Prototype[Method],
  ...args: Parameters<Extract<Prototype[Method], Func>>
) => ReturnType<Prototype[Method]>
```

<br>

> ℹ️ **NOTE**
>
> *Binding*
>
> The native function is already bound to the same `this` as your handler at call time. This means you can call `native(...)` directly without worrying about `.bind(this)` - it will behave exactly as the original method would on the current instance. 😉
>

<br>

`this` will be resolved to the provided prototype.  


`native` is the native method that's being overridden, with its original signature.  


`...args: Parameters<Extract<Prototype[Method], Func>>` all other arguments passed after the `native` method.  


`ReturnType<Type[Method]>` the return type of the handler is the same as the `native` method is.

<br>

#### `replace`

A Boolean indicating whether the prototype method should be replaced completely.  
Defaults to **false**.

<br>

Returns a Boolean whether the hooking onto was successful.

<br>
<br>

> ℹ️ **NOTE**
>
> *Unhooking*
>
> In situations where a method needs to be hooked temporarily - such as during debugging, instrumentation, or within a testing framework, it is advisable to keep a reference to the original method prior to applying the hook. This practice enables you to restore the prototype to its original condition after executing your custom logic, thereby preventing side effects from affecting unrelated code.
>

<br>

For instance, you can save
```ts
const originalUnshift = Array.prototype.unshift
```

apply your hook, execute your code or tests, and subsequently reassign

```ts
Array.prototype.unshift = originalUnshift
```

to undo the modification. This method guarantees that your changes are contained, reversible, and safe for use in collaborative environments.

<br>
<br>

## 🗒️ Examples

```ts
import { hook } from '@igorskyflyer/hook'

hook(Array.prototype, 'unshift', function (native, x) {
  // any code can be here,
  // not just owned by the prototype
  // you're hooking/replacing

  native(512)
  this.push(x / 2)

  // must adhere to the original method's
  // return type
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift#return_value
  return this.length // returns 3
})

const array: number[] = []

array.unshift(256)
console.log(array) // [512, 256, 128]
```


<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-hook/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-hook/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/jmap](https://www.npmjs.com/package/@igorskyflyer/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

[@igorskyflyer/strip-html](https://www.npmjs.com/package/@igorskyflyer/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

[@igorskyflyer/comment-it](https://www.npmjs.com/package/@igorskyflyer/comment-it)

> _📜 Formats the provided string as a comment, either a single or a multi line comment for the given programming language. 💻_

[@igorskyflyer/normalized-string](https://www.npmjs.com/package/@igorskyflyer/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

[@igorskyflyer/keppo](https://www.npmjs.com/package/@igorskyflyer/keppo)

> _🎡 Parse, manage, compare and output SemVer-compatible version numbers. 🛡_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
