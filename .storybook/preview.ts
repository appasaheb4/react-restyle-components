import type {Preview} from '@storybook/react';
import '../src/index.css';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        {name: 'light', value: '#fff'},
        {name: 'dark', value: '#333'},
      ],
    },
  },
};

export default preview;
