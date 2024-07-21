<h1 align="center">Hook</h1>

<br>

<p align="center">
	🪝 Hooks onto a JavaScript prototype, either extending or changing its <br>
	behavior or replacing it completely 👺
</p>

<br>
<br>

<div align="center">
	<blockquote>
		<br>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
		<br>
	</blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Usage](#-usage)
- [API](#-api)
    - [hook()](#hook-boolean)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

---

<br>
<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/hook"
```

<br>

## 🤹🏼 API

<br>

> [!CAUTION]
> This package provides ways of modifying the native prototype(s) of built-in JavaScript objects, use it only if you know what you're doing and with **caution** as it may cause unexpected results!
>

<br>

### hook(): boolean

```ts
function hook(
  proto: Prototype,
  method: string,
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
  this: Type,
  native: Type[Method],
  ...args: any[]
) => ReturnType<Type[Method]>
```

<br>

`this` will be resolved to the provided prototype.  


`native` is the native method that's being overridden, with its original signature.  


`...args: any[]` all other arguments passed after the `native` method.  


`ReturnType<Type[Method]>` the return type of the handler is the same as the `native` method is.

<br>

#### `replace`

A Boolean indicating whether the prototype method should be replaced completely.  
Defaults to **false**.

<br>

Returns a Boolean whether the hooking onto was successful.

---

## ✨ Examples

```ts
import { hook } from '@igor.dvlpr/hook'

hook(Array.prototype, 'unshift', function (native, x) {
	// any code can be here,
	// not just owned by the prototype
	// you're hooking/replacing
  this.push(x * 2)
})

const array: number[] = []

array.unshift(128)

console.log(array) // [128, 256]
```

---

## 📝 Changelog

📑 Changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-hook/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-hook/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/jmap](https://www.npmjs.com/package/@igor.dvlpr/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

[@igor.dvlpr/strip-html](https://www.npmjs.com/package/@igor.dvlpr/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

[@igor.dvlpr/comment-it](https://www.npmjs.com/package/@igor.dvlpr/comment-it)

> _📜 Formats the provided string as a comment, either a single or a multi line comment for the given programming language. 💻_

[@igor.dvlpr/normalized-string](https://www.npmjs.com/package/@igor.dvlpr/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

[@igor.dvlpr/keppo](https://www.npmjs.com/package/@igor.dvlpr/keppo)

> _🎡 Parse, manage, compare and output SemVer-compatible version numbers. 🛡_

---

<br>

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
