module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false,
    },
    env: {
        browser: true,
        es6: true,
    },
    extends: ["prettier", "plugin:prettier/recommended"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                printWidth: 100,
                trailingComma: "all",
                tabWidth: 4,
                semi: true,
                singleQuote: false,
            },
            {
                usePrettierrc: false,
            },
        ],
    },
};
