// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   pluginReactConfig,
// ];
// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";
// import pluginReactHooks from "eslint-plugin-react-hooks";
// import pluginImport from "eslint-plugin-import";
// import airbnbConfig from "eslint-config-airbnb";
// import airbnbHooksConfig from "eslint-config-airbnb/rules/react-hooks"; // Use the correct path
// import reactApp from 'eslint-config-react-app';

// const eslintConfig = [
//   {
//     languageOptions: {
//       globals: globals.browser,
//       ecmaVersion: 2021,
//       sourceType: "module",
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//         ecmaVersion: 2021,
//         sourceType: "module",
//       },
//     },
//   },
//     airbnbConfig,
//     airbnbHooksConfig,
//     pluginJs.configs.recommended,
//     reactApp,
//   {
//     plugins: {
//       react: pluginReact,
//       reactHooks: pluginReactHooks,
//       import: pluginImport,
//     },
//     rules: {
//       "react/jsx-filename-extension": [1, { extensions: [".jsx", ".js"] }],
//       "react/react-in-jsx-scope": "off",
//       "no-console": "warn",
//       "import/prefer-default-export": "off",
//       "react/prop-types": "off",
//       "react/function-component-definition": [
//         "error",
//         {
//           namedComponents: "arrow-function",
//           unnamedComponents: "arrow-function",
//         },
//       ],
//       "react/require-default-props": "off",
//       "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
//       "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
//       "import/extensions": [
//         "error",
//         "ignorePackages",
//         {
//           js: "never",
//           jsx: "never",
//         },
//       ],
//     },
//     settings: {
//       react: {
//         version: "detect",
//       },
//     },
//   },
// ];

// export default eslintConfig;
module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', 'react-hooks', 'import', 'prettier'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
        ],
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'no-console': 'warn',
        'import/prefer-default-export': 'off',
        'linebreak-style': ['error', 'unix'],
    },
}
