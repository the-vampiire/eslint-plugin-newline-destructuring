module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  env: {
    es6: true,
    jest: true,
  },
  ignorePatterns: ["node_modules", "build", "coverage", ".eslintrc.js", "jest.config.js"],
  plugins: ["import", "eslint-comments", "eslint-plugin-newline-destructuring"],
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  globals: {
    BigInt: true,
    console: true,
    WebAssembly: true,
  },
  rules: {
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "eslint-comments/disable-enable-pair": [
      "error",
      {
        allowWholeFile: true,
      },
    ],
    "eslint-comments/no-unused-disable": "warn",
    "jest/valid-title": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        alphabetize: {
          order: "ignore",
          caseInsensitive: false
        },
      },
    ],
    'newline-destructuring/newline': [
      "error",
      {
        items: 2,

      }
    ]
  },
};
