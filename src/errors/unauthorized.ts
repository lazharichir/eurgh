/* eslint-disable quotes */
import { TypedError } from "../typed-error"

export class UnauthorizedError extends TypedError<
	"UNAUTHORIZED",
	401,
	{
		actor: string
		action: string
		target: string
	}
> {
	constructor(actor: string, action: string, target: string, cause?: Error) {
		const message = `Actor "${actor}" unauthorized to perform "${action}" on target "${target}"`
		super(`UNAUTHORIZED`, 401, { action, actor, target }, message, cause)
	}
}
