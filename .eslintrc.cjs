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
        'import/extensions': 'off',
        'react/require-default-props': 'off',
    },
};
