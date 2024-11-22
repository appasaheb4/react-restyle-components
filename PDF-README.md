## If you use pdf any comp. then setup firstly those steps

### 1. Download fonts folder: https://github.com/appasaheb4/react-restyle-components/tree/master/assets/fonts

### 2. Paste your public folder

### 3. Your root file like index.js or App.tsx add your fonts path like this below

```
import { Font } from '@react-pdf/renderer';

Font.register({
  family: 'ArimaRegular',
  src: '/assets/fonts/arima/arima-regular.ttf',
});

Font.register({
  family: 'ArimaBold',
  fonts: [
    {
      src: '/assets/fonts/arima/arima-bold.ttf',
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
  ],
});

...
```

### 4. Use it (Make easy life) 😎
