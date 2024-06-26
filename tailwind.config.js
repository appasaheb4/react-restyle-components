const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: 'var(--theme-primary)',
        secondary: 'var(--theme-secondary)',
        'text-base': '#ffffff',
        gray: '#696969',
        'gray-light': '#C4C4C4',
        'gray-dark-secondary': '#979797',
        'gray-secondary': '#C4C4C4',
        'background-secondary': '#F0EFEE',
        rose: colors.rose,
        red: '#FF0000',
        orange: '#E7503D',
        orange1: '#EF4444',
        primaryCharcoal: '#212721',
      },
      fontFamily: {
        nunitoSansRegular: ['Nunito Sans Regular'],
        nunitoSansBold: ['Nunito Sans Bold'],
        inspiration: ['Inspiration Regular'],
      },
      fontSize: {
        xs: '8px',
        '2xs': '10px',
        '3xs': '12px',
        '4xs': '14px',
        md: '16px',
        '2md': '18px',
        '3md': '20px',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
        'screen/1': 'calc(100vh / 1)',
        'screen/1.5': 'calc(100vh / 1.5)',
        'screen/1.8': 'calc(100vh / 1.8)',
        'screen/2': 'calc(100vh / 2)',
        'screen/2.5': 'calc(100vh / 2.5)',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      },
      borderRadius: {
        '4xl': '2rem',
        '100px': '100px',
      },
      height: {
        h90P: '90%',
        h98P: '98%',
        'screen/2': '50vh',
        screen98: '98vh',
        screen96: '96vh',
        screen94: '94vh',
        screen92: '92vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
