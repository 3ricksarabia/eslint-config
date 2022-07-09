module.exports = {
  env: {
    "jest/globals": true,
  },
  plugins: ["jest"],
  extends: ["plugin:jest/recommended", "plugin:jest/style"],
  rules: {
    "no-unused-expressions": 0,
  },
};
