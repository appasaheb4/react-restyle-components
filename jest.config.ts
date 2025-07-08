import type { Config } from '@jest/types';

const projects = [
  {
    displayName: 'react-restyle-components',
    // rootDir: '<rootDir>/react-restyle-components',
    testEnvironment: 'jsdom',
    // setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testPathIgnorePatterns: ['(.*).spec.[jt]sx?'],
  },
];

const ignoreNodeModules = [
  '@hassanmojab/react-modern-calendar-datepicker',
].join('|');

const config: Config.InitialOptions = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/types.ts',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/index.{js,jsx,ts,tsx}',
    '!/src/util/stories/**/*',
    '!<rootDir>/src/**/__mocks__/**/*',
    '!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*.hiddenStories.{js,jsx,ts,tsx}',
    '!<rootDir>/src/stories/**',
    '!**/**/illustrationsList.ts',
    '!<rootDir>/**/iconTypes.ts',
    '!<rootDir>/**/Templates/StoryComponents/**/*',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      lines: 50,
      functions: 50,
    },
  },
  projects,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': require.resolve('babel-jest'),
  },
  transformIgnorePatterns: [`/node_modules/(?!${ignoreNodeModules})`],
};

export default config;
