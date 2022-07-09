module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb-base", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        trailingComma: "all",
        semi: true,
        singleQuote: false,
      },
      {
        usePrettierrc: false,
      },
    ],
  },
};
