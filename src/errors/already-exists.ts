/* eslint-disable quotes */
import { TypedError } from "../typed-error"

export class AlreadyExistsError extends TypedError<
	"ALREADY_EXISTS",
	409,
	{
		resource: string
		identifier: string
	}
> {
	constructor(resource: string, identifier: string, cause?: Error) {
		const capitalizedResource = resource.charAt(0).toUpperCase()
		const message = `${capitalizedResource} "${identifier}" not found`
		super(`ALREADY_EXISTS`, 409, { resource, identifier }, message, cause)
	}
}
