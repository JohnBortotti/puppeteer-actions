/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ["dist", "node_modules"],
  testMatch: ["**/tests/**/*.ts?(x)"]
};