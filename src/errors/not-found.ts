/* eslint-disable quotes */
import { TypedError } from "../typed-error"

export class NotFoundError extends TypedError<
	"NOT_FOUND",
	404,
	{
		resource: string
		identifier: string
	}
> {
	constructor(resource: string, identifier: string, cause?: Error) {
		const capitalizedResource = resource.charAt(0).toUpperCase()
		const message = `${capitalizedResource} "${identifier}" not found`
		super(`NOT_FOUND`, 404, { resource, identifier }, message, cause)
	}
}
