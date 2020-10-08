import { TypedError } from "./typed-error"

export type Cause = TypedError | Error | Shape

export interface Shape {
	message: string
	kind: string
	code: number
	data: any
	stack?: string
	cause?: Cause
}

export interface ErrorShape extends Error, Shape {}

export interface GenericErrorShape<K extends string, C extends number, D extends any>
	extends ErrorShape {
	kind: K
	code: C
	data: D
}
