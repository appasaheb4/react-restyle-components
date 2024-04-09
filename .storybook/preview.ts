import type {Preview} from '@storybook/react';
import 'tailwindcss/tailwind.css';
const preview: Preview = {
  parameters: {
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
