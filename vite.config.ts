import react from '@vitejs/plugin-react';
import {resolve} from 'path';
import {defineConfig} from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
// import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

import * as packageJson from './package.json';
/// <reference types="vite-plugin-svgr/client" />

export default defineConfig(() => ({
  plugins: [
    react(),
    dts({
      include: ['src'],
      copyDtsFiles: true,
    }),
    cssInjectedByJsPlugin({
      injectCodeFunction: function injectCodeCustomRunTimeFunction(
        cssCode,
        options
      ) {
        try {
          if (typeof document != 'undefined') {
            const elementStyle = document.createElement('style');
            elementStyle.appendChild(document.createTextNode(cssCode));
            const head = document.getElementsByTagName('head')[0];
            head.insertBefore(elementStyle, head.firstChild);
          }
        } catch (e) {
          console.error('vite-plugin-css-injected-by-js', e);
        }
      },
    }),
    // eslint({
    //   exclude: ['/virtual:/**', 'node_modules/**'],
    // }),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  build: {
    lib: {
      entry: resolve('index.ts'),
      name: 'react-restyle-components',
      formats: ['es', 'cjs'],
      fileName: (format) =>
        `react-restyle-components.${format === 'cjs' ? 'cjs' : 'es.js'}`,
    },
    optimizeDeps: {
      exclude: Object.keys(packageJson.peerDependencies),
    },
    minify: false,
    target: ['es2020'],
    esbuild: {
      minify: false,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@openfin/core',
        '@radix-ui/react-avatar',
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-separator',
        '@radix-ui/react-tooltip',
        'clsx',
        'events',
        'use-async-effect',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:3]',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
}));
