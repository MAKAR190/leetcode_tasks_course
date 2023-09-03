module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    // Basic rules
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-console": "warn",

    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
  },
};
