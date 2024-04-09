// const config = {
//   stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svg)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//     '@storybook/preset-create-react-app',
//     '@storybook/addon-storysource',
//   ],
//   framework: '@storybook/react',
//   core: {
//     builder: 'webpack5',
//   },
// };

import {StorybookConfig} from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svg)'],
  framework: '@storybook/react-webpack5',
};

export default config;
