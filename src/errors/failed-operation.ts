/* eslint-disable quotes */
import { TypedError } from "../typed-error"

export class FailedOperationError extends TypedError<"FAILED_OPERATION", 500, any> {
	constructor(message: string, data?: any, cause?: Error) {
		super(`FAILED_OPERATION`, 500, data || {}, message, cause)
	}
}
