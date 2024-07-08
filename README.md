# Hook

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

> [!CAUTION]
> This package provides ways of modifying the native prototype(s) of built-in JavaScript objects, use it only if you know what you're doing and with **caution** as it may cause unexpected results!

<br>
<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/hook"
```

<br>

## 🤹🏼 API

```ts
function hook(
  proto: any,
  method: string,
  handler: HandlerFn,
  replace: boolean = false
): boolean
```

Hooks onto a JavaScript prototype in order to extend, modify or completely replace a given method of it.

<br>

- `proto` - a prototype, e.g. `Array.prototype`, `Number.prototype`, etc.
- `method` - a method to hook onto, e.g. 'push' of `Array.prototype`.
- `handler` a custom function to run when the hooked method is called.
- `replace` a Boolean indicating whether the prototype method should be replaced completely. Defaults to **false**.

<br>

Returns a Boolean whether the hooking onto was successful.

<br>

### Example

```ts
import { hook } from '@igor.dvlpr/hook'

hook(Array.prototype, 'unshift', function (x) {
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

<br>
<br>

>
> Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
>
