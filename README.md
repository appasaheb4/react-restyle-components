# react-restyle-components

Easy use restyle components

## Installation

```
yarn add react-restyle-components tailwindcss
yarn add -D @craco/craco craco-alias postcss autoprefixer

```

## Some changes required

```
tsconfig.json
"compilerOptions": {
...
"noImplicitAny": false
},

// modify script
"start": "serve -s ./build",
"dev": "craco start",
"build": "craco build",
"test": "craco test"

// Paste 3 files your root path
https://github.com/appasaheb4/react-restyle-components/blob/master/craco.config.js
https://github.com/appasaheb4/react-restyle-components/blob/master/postcss.config.js
https://github.com/appasaheb4/react-restyle-components/blob/master/tailwind.config.js

```

### 📚 Storybook

https://appasaheb4.github.io/react-restyle-components

### More inforamtion watch youtube channel: https://www.youtube.com/tech-abl
