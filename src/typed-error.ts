/* eslint-disable quotes */
import { Cause, ErrorShape, GenericErrorShape } from "./shape"

const cause = [
	new Error(`err#3 triggered by err#2`),
	new Error(`err#2 triggered by err#1`),
	new Error(`err#1 triggered by err#0`),
]

export class TypedError<K extends string = string, C extends number = number, D extends any = any>
	extends Error
	implements GenericErrorShape<K, C, D> {
	public constructor(
		public kind: K,
		public code: C,
		public data: D,
		public message: string,
		public cause?: ErrorShape["cause"]
	) {
		super(message)
	}

	public toJSON() {
		return this.objectify()
	}

	public toString() {
		return `${this.message} [${this.kind}, ${this.code}]`
	}

	public pretty(): string {
		return JSON.stringify(this.objectify())
	}

	private getTraces() {
		return (this.stack || ``).split(`\n`).map((line) => line.trim())
	}

	private objectify() {
		return {
			kind: this.kind,
			code: this.code,
			data: this.data,
			message: this.message,
			cause: this.cause,
			traces: this.getTraces(),
			stack: this.stack,
			name: this.name,
		}
	}

	public getChainOfCausation(): any[] {
		const chain: any[] = []
		let current: Cause | undefined = this.cause
		while (current) {
			chain.push(current)
			current = (current as any).cause
		}
		return chain
	}
}
