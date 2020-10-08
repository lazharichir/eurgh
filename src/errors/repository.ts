/* eslint-disable quotes */
import { TypedError } from "../typed-error"

export class RepositoryError extends TypedError<
	"REPOSITORY",
	500,
	{
		repository: string
		operation?: string
	}
> {
	constructor(repository: string, operation: string, cause?: Error) {
		const message = [
			`Error while contacting repository "${repository}"`,
			operation ? `for operation "${operation}"` : ``,
		]
			.join(` `)
			.trim()
		super(`REPOSITORY`, 500, { repository, operation }, message, cause)
	}
}
