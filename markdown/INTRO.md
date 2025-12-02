# Getting started with React components

#### React Restyle Components are built with:

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [styled-components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [Playwright](https://playwright.dev/)

## Github Access

Navigate to the [UI repository](https://github.com/appasaheb4/react-restyle-components) and confirm that you can access it.

## 📦 Install

```sh
# npm
npm install react-restyle-components
# or yarn
yarn add react-restyle-components
```

### ✨ Components

Use any of our available components in your app.

```jsx
import React from 'react';
import {Button} from 'react-restyle-components';

export const DemoButton = () => (
  <Button variant="outline" onClick={() => console.log('clicked')}>
    Click me
  </Button>
);
```

### 🎨 Theme

```jsx
import React, {useEffect} from 'react';
import {updateTheme} from 'react-restyle-components';

export const App = () => {
  useEffect(() => {
    updateTheme('default');
  }, []);

  return <>...</>;
};
```

## 🍻 Contributing

Contributions are what make our package so awesome, an amazing community and such a place to be learn, inspire and create 🚀

If you are interested in contributing back to [Tech ABL](https://www.tech-abl.com) whether that be bug fixes or new features.

Any contributions you make are greatly appreciated, **thank you** 🙏

## 💬 Let's talk

Let's get the conversation going. If you have any questions, requests or bug report, reach out on

- [`#whatsapp`](https://wa.me/919260303151) _general questions or any support_
- [`#update`](https://tech-abl.com/contact-us) _design updates and discussions_ or _engineering updates and discussions_
