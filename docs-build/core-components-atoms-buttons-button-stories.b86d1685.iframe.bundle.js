'use strict';
(self.webpackChunkreact_restyle_components =
  self.webpackChunkreact_restyle_components || []).push([
  [951],
  {
    './src/core-components/atoms/buttons/button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        _buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/core-components/atoms/buttons/buttons.component.tsx'
        ),
        _storybook_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@storybook/test/dist/index.mjs'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Design System/Atoms/Button',
          component: _buttons_component__WEBPACK_IMPORTED_MODULE_1__.$,
          tags: ['autodocs'],
          args: {className: 'w-40'},
          parameters: {
            componentSubtitle:
              "import { Button } from 'react-restyle-components'",
          },
        },
        Primary = {
          args: {
            disable: !1,
            type: 'solid',
            children: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'span',
              null,
              'Primary'
            ),
            onClick: (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)(),
          },
        },
        __namedExportsOrder = ['Primary'];
      Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...Primary.parameters?.docs,
          source: {
            originalSource:
              "{\n  // parameters: {\n  //   backgrounds: {\n  //     default: 'dark',\n  //   },\n  // },\n  args: {\n    disable: false,\n    type: 'solid' || 'outline',\n    children: <span>Primary</span>,\n    onClick: fn()\n  }\n}",
            ...Primary.parameters?.docs?.source,
          },
        },
      };
    },
    './src/core-components/atoms/buttons/buttons.component.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {$: () => Button});
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js'
      );
      __webpack_require__('./src/tc.css');
      const Button = ({
        type = 'solid',
        className = 'w-40',
        disable = !1,
        onClick,
        children,
      }) => {
        const buttonColorClass =
          'solid' === type
            ? 'text-white bg-[#007BFF] hover:bg-[#007BFF] hover:shadow-lg text-white'
            : 'dark:text-white  text-black border border-gray-400 hover:shadow-lg';
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          'button',
          {
            'data-testid': 'buttonElement',
            disabled: disable,
            className: `${className} rounded-100px px-3 py-1  text-md ${buttonColorClass} pt-2 pb-2 font-arimaRegular ${disable ? 'opacity-50' : 'opacity-100'}`,
            onClick: () => onClick(),
          },
          children
        );
      };
      Button.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Button',
        props: {
          type: {
            required: !1,
            tsType: {
              name: 'union',
              raw: "'solid' | 'outline'",
              elements: [
                {name: 'literal', value: "'solid'"},
                {name: 'literal', value: "'outline'"},
              ],
            },
            description: '',
            defaultValue: {value: "'solid'", computed: !1},
          },
          className: {
            required: !1,
            tsType: {name: 'any'},
            description: '',
            defaultValue: {value: "'w-40'", computed: !1},
          },
          disable: {
            required: !1,
            tsType: {name: 'boolean'},
            description: '',
            defaultValue: {value: 'false', computed: !1},
          },
          onClick: {
            required: !0,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: {arguments: [], return: {name: 'void'}},
            },
            description: '',
          },
          children: {
            required: !0,
            tsType: {name: 'ReactReactNode', raw: 'React.ReactNode'},
            description: '',
          },
        },
      };
    },
  },
]);
