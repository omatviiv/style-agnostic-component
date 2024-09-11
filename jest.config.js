/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^projectRoot(.*)$': '<rootDir>/projectRoot$1',
    '^demo(.*)$': '<rootDir>/demo$1',
    '^svg(.*)$': '<rootDir>/svg$1',
  },
};
