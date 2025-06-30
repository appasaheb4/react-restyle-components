export default {
    present: 'ts-jest',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(css|sass)$': '<rootDir>/src/__mocks__/styleMock.ts',
    },
};
