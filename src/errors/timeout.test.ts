import { TimeoutError } from "./timeout"

test(`TimeoutError`, () => {
	const error = new TimeoutError(1000)
	expect(error).toBeInstanceOf(TimeoutError)
	expect(error).toBeInstanceOf(Error)
	expect(error.data.operation).toBeUndefined()
	expect(error.data.timeout).toBe(1000)

	const error2 = new TimeoutError(1000, `functionName`)
	expect(error2.data.operation).toBe(`functionName`)
})
