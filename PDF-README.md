## If you use pdf any comp. then setup firstly those steps

### Download fonts folder: https://github.com/appasaheb4/react-restyle-components/tree/master/assets/fonts

    and paste your public folder

### Your root file like index.js for App.tsx below paths

```
import { Font } from '@react-pdf/renderer';

 Font.register({
   family: 'ArimaRegular',
   src: '/assets/fonts/arima/Arima-Regular.ttf',
 });
```
