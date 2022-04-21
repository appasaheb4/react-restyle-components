# react-restyle-components

Easy use restyle components

## Installation

```
npm i react-restyle-components
or
yarn add react-restyle-components
```

##

```jsx
import {Stepper} from 'react-restyle-components';

<Stepper
  steps={['1', '2', '3']}
  currentStep={2}
  onStepClick={(currentStep, step) => {
    // eslint-disable-next-line no-console
    console.log({currentStep, step});
  }}
  className="mt-4"
/>;
```

### Outputs

# Storybook

https://appasaheb4.github.io/react-restyle-components

### More inforamtion watch youtube channel: https://www.youtube.com/tech-abl
