import type {Preview, ReactRenderer} from '@storybook/react';
import {withThemeByClassName} from '@storybook/addon-themes';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import '../storybook-css.css';
// import '../src/tc.module.css';
// import '../src/index.css';
import '../src/core-components/src/tc.module.css';
import '../src/core-components/src/index.css';

const preview: Preview = {
  parameters: {
    options: {
      showPanel: true,
      panelPosition: 'bottom',
      storySort: {
        order: [
          'Welcome',
          'Introduction',
          'Changelog',
          'Documentation',
          ['Getting Started', '*'],
          'Foundations',
          'Components',
          'Templates',
          ['Overview', 'Journey template', ['Overview', '*']],
        ],
        method: 'alphabetical',
      },
    },
    // actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
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
