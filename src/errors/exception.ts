/* eslint-disable quotes */
import { TypedError } from "../typed-error"

export class ExceptionError extends TypedError<"EXCEPTION", 500, any> {
	constructor(message: string, cause?: Error) {
		super(`EXCEPTION`, 500, {}, message, cause)
	}
}
