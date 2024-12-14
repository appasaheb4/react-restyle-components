import type {Preview, ReactRenderer} from '@storybook/react';
import {withThemeByClassName} from '@storybook/addon-themes';
import '../src/index.css';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: (story1, story2) =>
        globalThis['storybook-multilevel-sort:storySort'](story1, story2),
    },
    // actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // backgrounds: {
    //   values: [
    //     {name: 'light', value: '#fff'},
    //     {name: 'dark', value: '#333'},
    //     {name: 'light-gray', value: '#F6F9FC'},
    //   ],
    // },
    decorators: [
      withThemeByClassName<ReactRenderer>({
        themes: {
          light: 'theme--light',
          dark: 'theme--dark',
        },
        defaultTheme: 'dark',
      }),
    ],
  },
};

export default preview;
