module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|svg|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../public"],
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
};

// import {StorybookConfig} from '@storybook/react-webpack5';
// const config: StorybookConfig = {
//   stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svg)'],
//   framework: '@storybook/react-webpack5',
// };
// export default config;
