import { NotFoundError } from "./not-found"

test(`NotFound`, () => {
	const error = new NotFoundError(`Document`, `the/identi/fier`)
	expect(error).toBeInstanceOf(NotFoundError)
	expect(error).toBeInstanceOf(Error)
})
