module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ["airbnb", "./index"],
    rules: {
        "react/jsx-filename-extension": 0,
        "react/react-in-jsx-scope": 0,
        "no-underscore-dangle": 0,
        "react/jsx-props-no-spreading": 0,
        "react/require-default-props": "off",
    },
};
