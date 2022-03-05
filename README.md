# Eslint Config
[@ericksarabia/eslint-config](https://github.com/ericksarabia/eslint-config/packages/803005) is a shareable configuration package for [eslint](http://eslint.org) and [prettier](https://prettier.io) rules.

## Installation
Install package and peer dependencies
```sh
npx install-peerdeps --dev @ericksarabia/eslint-config
```
## Usage
In order to use this config, you can do it from the `package.json` by adding the field:
```json
{
  "eslintConfig": {
     "extends": "@ericksarabia/eslint-config"
  }
}
```
or you can add a `.eslintrc.js` file to your project root containing:
```js
module.exports = {
  extends: ["@ericksarabia/eslint-config"],
};
```
## Available Rules
### @ericksarabia/eslint-config
The default export contains common rules for JavaScript.
```js
// .eslintrc.js
module.exports = {
  extends: ["@ericksarabia/eslint-config"],
};
```
### @ericksarabia/eslint-config/react
Extends `@ericksarabia/eslint-config` adding specific rules to React.
```js
// .eslintrc.js
module.exports = {
  extends: ["@ericksarabia/eslint-config/react"],
};
```
### @ericksarabia/eslint-config/typescript
Changes the eslint parser and extends `@ericksarabia/eslint-config/react` adding typescript plugin, make sure to install `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`.
```js
// .eslintrc.js
module.exports = {
  extends: ["@ericksarabia/eslint-config/typescript"],
};
```
### @ericksarabia/eslint-config/jest
Adds specific rules for jest testing framework. This rule requires installing `eslint-plugin-jest`.
```js
// .eslintrc.js
module.exports = {
  extends: ["@ericksarabia/eslint-config/jest"],
};
```
## VSCode Integration
1. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Update VSCode settings by adding the following fields in the `settings.json` file:
```json
{
  "eslint.alwaysShowStatus": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  }
}
```
This will automatically format your code once you save. You don't need VSCode prettier extension enabled, eslint will automatically run prettier for you.
