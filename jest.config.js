/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  moduleNameMapper: {
    '^@apps/(.*)': '<rootDir>/src/apps/$1',
    '^@commons/(.*)': '<rootDir>/src/commons/$1',
    '^@domains/(.*)': '<rootDir>/src/domains/$1',
    '^@infra/(.*)': '<rootDir>/src/infra/$1',
    '^@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '^@helpers/(.*)': '<rootDir>/helpers/$1',
  },
  coveragePathIgnorePatterns: [
    'apps/security',
    '^.*\\Repository.ts',
    'commons/*',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/build/',
  ],
};
