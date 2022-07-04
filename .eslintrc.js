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
        'react/jsx-props-no-spreading': 'off',
        'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
        'jsx-a11y/media-has-caption': 'off',
    },
    env: {
        browser: true,
    },
    ignorePatterns: [],
};