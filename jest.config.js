module.exports = {
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.json"
    }
  },
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "testRegex": "/test/(unit|integration)/.*\\.test\\.ts$",
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
  "testEnvironment": "node",
  "setupFilesAfterEnv": ["jest-rdf", "<rootDir>/test/util/SetupTests.ts"],
  "collectCoverage": true,
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/test/"
  ],
  "coverageThreshold": {
    "./src": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  }
};
