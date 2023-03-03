const nextJest = require('next/jest')
const path = require('path')
const createJestConfig = nextJest({
  dir: './'
  //   moduleDirectories: ['node_modules', path.resolve(__dirname, 'src')],

})
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/common/(.*)$': '<rootDir>/src/common/$1',

    '^@/pages/(.*)$': '<rootDir>/src/pages/$1'
  },
  testEnvironment: 'jest-environment-jsdom'
}
module.exports = createJestConfig(customJestConfig)
