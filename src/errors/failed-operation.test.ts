import { FailedOperationError } from "./failed-operation"

test(`FailedFound`, () => {
	const error = new FailedOperationError(`The operation failed`, {
		key: `value`,
		bool: true,
		num: -1,
	})
	expect(error).toBeInstanceOf(FailedOperationError)
	expect(error).toBeInstanceOf(Error)
	expect(error.data).toStrictEqual({
		key: `value`,
		bool: true,
		num: -1,
	})
})
