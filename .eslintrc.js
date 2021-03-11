module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "newline-per-chained-call": "warn",
    "linebreak-style": "off",
    "arrow-parens": "off",
    // Incompatible with prettier
    "object-curly-newline": "off",
    // Incompatible with prettier
    "no-mixed-operators": "off",
    // Incompatible with prettier
    "function-paren-newline": "off",
    // Incompatible with prettier
    "no-plusplus": "off",
    "space-before-function-paren": 0,
    // Incompatible with prettier
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "never",
          "normal": "never",
          "component": "always"
        },
        "svg": "any",
        "math": "always"
      }
    ],
    "vue/no-textarea-mustache": "off",
    "vue/require-prop-types": "off",
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
