module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'airbnb',
    ],
    plugins: [],
    rules: {
    	indent: ['error', 2],
        'react/jsx-filename-extension': 'off',
    },
    env: {
        browser: true,
    },
    ignorePatterns: [],
};