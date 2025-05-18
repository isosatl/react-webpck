// eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    plugins: { react: reactPlugin },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly"
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // Add or override rules here
    },
  },
];
