module.exports = {
	roots: [`<rootDir>/src/`, `<rootDir>/tests/`],
	testMatch: [`**/?(*.)+(spec|test).+(ts|tsx|js)`],
	transform: {
		"^.+\\.(ts|tsx)$": `ts-jest`,
	},
	globals: {
		"ts-jest": {
			diagnostics: false,
		},
	},
	moduleDirectories: [`node_modules`, `src`],
	coveragePathIgnorePatterns: [`node_modules`, `dist/`],
}
