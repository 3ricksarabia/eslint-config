module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["./react"],
  plugins: ["@typescript-eslint"],
  rules: {
    "react/tsx-filename-extension": 0,
    "react/prop-types": 0,
    "import/extensions": "off",
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": "off",
  },
};
