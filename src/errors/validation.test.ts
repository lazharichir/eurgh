import { ValidationError } from "./validation"

test(`ValidationError`, () => {
	const error = new ValidationError()
	error.addIssue(`Password too short`, `TOO_SHORT`, [`password`])
	error.addIssue(`Passwords do not match`, `NOT_EQUAL`, [`password`])
	expect(error).toBeInstanceOf(ValidationError)
	expect(error).toBeInstanceOf(Error)
	expect(error.data.issues).toHaveLength(2)
	expect(error.data.issues[1]).toStrictEqual({
		message: `Passwords do not match`,
		code: `NOT_EQUAL`,
		path: [`password`],
	})
})
