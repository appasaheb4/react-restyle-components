export default {
    preset: 'ts-jest',
    // setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        // Handle CSS modules
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.(css|scss|sass|less|style|svg)$': '<rootDir>/__mocks__/styleMock.ts',
    },
};
