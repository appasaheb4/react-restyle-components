export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
     '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|scss|sass|less|style|svg)$': '<rootDir>/__mocks__/styleMock.ts',
  },
};
