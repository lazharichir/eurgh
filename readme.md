# eurgh – strongly-typed errors for TypeScript

A simple convenience package offering strongly-typed customer errors to uses in TypeScript. You can embed a `cause` which is any `Error` that you want to encapsulate which is super useful for debugging nested `try/catch/throw`.

## When is this useful?

Using Node or Browser built-in `Error` types is just cumbersome and weak in terms of flexibility. **Eurgh** is a lightweight library that contains a generic base `class TypedError<Name, Code, Data>` which is extended by multiple errors such as `NotFoundError`, `ValidationError`, `UnauthorizedError`, etc.

## Extending with your own custom errors

Obviously, you can extend `TypedError` and create your own custom typed error(s). For example, to create a `TimeoutError`:

```typescript
import { TypedError } from "eurgh"

export class TimeoutError extends TypedError<
	"TIMEOUT",
	408,
	{ timeout: number; operation?: string }
> {
	constructor(timeout: number, operation?: string, cause?: Error) {
		const message = [
			`Timeout of ${timeout.toLocaleString()}ms exceeded`,
			operation ? `for operation "${operation}"` : ``,
		]
			.join(` `)
			.trim()

		super(`TIMEOUT`, 408, { timeout, operation }, message, cause)
	}
}

// And you can then throw it from anywhere in your project
try {
	throw new TimeoutError(1000)
	throw new TimeoutError(1000, `callRestApi`)
} catch (error) {
	if (error instanceof TimeoutError) {
		// handle it
	}
}
```

## Shape

All of our errors implement the below interface, often narrowing it down further for strong error typing:

```typescript
// The basic shape of any error from Eurgh
export interface Shape {
	message: string
	kind: string
	code: number
	data: any
	stack?: string
	cause?: Cause
}

// The generic interface implemented by our TypedError base class.
export interface GenericErrorShape<K extends string, C extends number, D extends any>
	extends ErrorShape {
	kind: K
	code: C
	data: D
}

// All custom errors extend TypedError which is defined as follows
export class TypedError<
	K extends string = string, 	// the string literal for the error's kind
	C extends number = number, 	// the number literal for the error's code
	D extends any = any 		// the data field containing the metadata for further debugging
> extends Error implements GenericErrorShape<K, C, D>
```

## Error Messages

Personally, I simply prefer to hide each custom error's message from the caller. That way, I normalize the way each error kind outputs its message. And you provide the input by typing your custom error's `constructor`.

You can always add more flexibility by allowing a `message: string` argument, or a more lax static factory method.

## Why the name _eurgh_?

Mostly because:

1. it kinda sounds like **err**
2. it is a sound I make when I see random unexpected errors, ha

Finally, this is a package mostly built to be used in my own microservices. _(I got tired of recreating and copy-pasting the same files from project to project.)_
