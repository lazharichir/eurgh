import { ExceptionError } from "./exception"

test(`NotFound`, () => {
	const error = new ExceptionError(`A message!`)
	expect(error).toBeInstanceOf(ExceptionError)
	expect(error).toBeInstanceOf(Error)
})
