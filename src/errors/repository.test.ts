import { RepositoryError } from "./repository"

test(`RepositoryError`, () => {
	const pgError = new Error(`ENOENT: And the error message.`)
	const error = new RepositoryError(`Posts`, `findById`, pgError)
	expect(error).toBeInstanceOf(RepositoryError)
	expect(error).toBeInstanceOf(Error)
	expect(error.data.repository).toBe(`Posts`)
	expect(error.data.operation).toBe(`findById`)
	expect(error.cause).toBeInstanceOf(Error)
	expect(error.getChainOfCausation()).toHaveLength(1)
})
