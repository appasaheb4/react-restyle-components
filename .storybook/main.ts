import type {StorybookConfig} from '@storybook/react-webpack5';
import {configureSort} from 'storybook-multilevel-sort';
configureSort({
  storyOrder: {
    introduction: null,
    'getting started': null,
    changelog: null,
    colors: null,
    icons: null,
    fonts: null,
    techABL: {
      '*': {
        status: null,
        Documentation: null,
        'basic usage': null,
      },
    },
    '**': {
      status: null,
      Documentation: null,
      'basic usage': null,
      Basic: null,
    },
  },
  typeOrder: [],
});

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-css-modules',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  webpackFinal: async (config: any, {configType}) => {
    if (configType === 'DEVELOPMENT') {
      // Modify config for development
    }
    if (configType === 'PRODUCTION') {
      // Modify config for production
    }
    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as {test: RegExp}).test;
      if (!test) {
        return false;
      }
      return test.test('.svg');
    }) as {[key: string]: any};
    imageRule.exclude = /\.svg$/;
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
export default config;
