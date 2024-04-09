import 'tailwindcss/tailwind.css';
const preview = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    autodocs: 'tag',
  },
  parameters: {
    backgrounds: {
      values: [
        {name: 'light', value: '#fff'},
        {name: 'dark', value: '#333'},
      ],
    },
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  args: {theme: 'dark'},
};
export default preview;
