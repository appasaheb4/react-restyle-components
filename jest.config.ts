export default {
  present: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|sass)$': '<rootDir>/src/__mocks__/styleMock.ts',
  },
};
