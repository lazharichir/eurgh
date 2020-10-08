import { ExceptionError, NotFoundError, UnauthorizedError } from "../src"

test(`Chain of Causation`, () => {
	const errA = new NotFoundError(`Document`, `the/identi/fier`)
	const errB = new ExceptionError(`errB caused by errA`, errA)
	const errC = new ExceptionError(`errC caused by errB`, errB)
	const errD = new UnauthorizedError(`role/reader`, `iam:DeleteUser`, `user:*:johndoe`, errC)
	expect(errD).toBeInstanceOf(UnauthorizedError)
	expect(errD.cause).toBeInstanceOf(ExceptionError)
	// @ts-expect-error
	expect(errD.cause.cause).toBeInstanceOf(ExceptionError)
	// @ts-expect-error
	expect(errD.cause.cause?.cause).toBeInstanceOf(NotFoundError)
	expect(errD.getChainOfCausation()).toHaveLength(3)
})
