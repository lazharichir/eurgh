import { AlreadyExistsError } from "./already-exists"

test(`AlreadyExists`, () => {
	const error = new AlreadyExistsError(`document`, `the/identi/fier`)
	expect(error).toBeInstanceOf(AlreadyExistsError)
	expect(error).toBeInstanceOf(Error)
})
