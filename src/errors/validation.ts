/* eslint-disable quotes */
import { TypedError } from "../typed-error"

export type ValidationErrorIssue = {
	message: string
	path: (string | number)[]
	code: string
}

export class ValidationError extends TypedError<
	"VALIDATION",
	400,
	{
		issues: ValidationErrorIssue[]
	}
> {
	constructor(cause?: Error) {
		const message = `Issues encountered while validating the request`
		super(`VALIDATION`, 400, { issues: [] }, message, cause)
	}

	public addIssue(
		message: ValidationErrorIssue["message"],
		code: ValidationErrorIssue["code"] = `invalid`,
		path: ValidationErrorIssue["path"] = []
	) {
		this.data.issues.push({ message, code, path })
		return this
	}
}
