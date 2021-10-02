module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "no-unused-vars": "error",
    "prettier/prettier": "error",
    "arrow-body-style": ["error", "as-needed"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]|(JQuery|Window)",
          match: true,
        },
      },
    ],
  },
  ignorePatterns: ["packages/*/**/webpack.config.js", "packages/jvectormap", "packages/jquery-mousewheel"],
};
