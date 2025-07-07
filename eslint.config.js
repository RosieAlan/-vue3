import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 基础 JS 配置
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
  },

  // 全局变量配置
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        ...globals.jest,
        process: "readonly", // ✨添加 process 全局变量
      },
    },
  },

  // TypeScript 配置
  ...tseslint.configs.recommended,

  // Vue 配置
  ...pluginVue.configs["flat/essential"],

  // Prettier 配置
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // Vue 文件解析器配置
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // 自定义规则配置
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    rules: {
      // ESLint 基础规则
      "no-var": "error", // ✨要求使用 let 或 const 而不是 var
      "no-multiple-empty-lines": ["warn", { max: 1 }], // ✨不允许多个空行
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off", // ✨生产环境禁止 console
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", // ✨生产环境禁止 debugger
      "no-unexpected-multiline": "error", // ✨禁止空余的多行
      "no-useless-escape": "off", // ✨禁止不必要的转义字符

      // TypeScript 规则
      "@typescript-eslint/no-unused-vars": "error", // ✨禁止定义未使用的变量
      "@typescript-eslint/prefer-ts-expect-error": "error", // ✨禁止使用 @ts-ignore
      "@typescript-eslint/no-explicit-any": "off", // ✨允许使用 any 类型
      "@typescript-eslint/no-non-null-assertion": "off", // ✨允许非空断言
      "@typescript-eslint/no-namespace": "off", // ✨允许使用命名空间
      "@typescript-eslint/semi": "off", // ✨不强制分号

      // Vue 规则
      "vue/multi-word-component-names": "off", // ✨允许单词组件名
      "vue/no-mutating-props": "off", // ✨允许修改 props
      "vue/attribute-hyphenation": "off", // ✨不强制属性命名样式
    },
  },
]);
