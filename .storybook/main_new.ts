import type {StorybookConfig} from '@storybook/react-vite';
import {configureSort} from 'storybook-multilevel-sort';
configureSort({
  storyOrder: {
    introduction: null,
    'getting started': null,
    'react-restyle-components': {
      '*': {
        status: null,
        docs: null,
        'basic usage': null,
      },
    },
    '**': {
      status: null,
      docs: null,
      'basic usage': null,
    },
  },
  typeOrder: [],
});
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mjs)'],
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
