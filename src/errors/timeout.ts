/* eslint-disable quotes */
import { TypedError } from "../typed-error"

export class TimeoutError extends TypedError<
	"TIMEOUT",
	408,
	{
		timeout: number
		operation?: string
	}
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
