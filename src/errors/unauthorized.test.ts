import { UnauthorizedError } from "./unauthorized"

test(`Unauthorized`, () => {
	const error = new UnauthorizedError(`role/reader`, `iam:DeleteUser`, `user:*:johndoe`)
	expect(error).toBeInstanceOf(UnauthorizedError)
	expect(error).toBeInstanceOf(Error)
})
