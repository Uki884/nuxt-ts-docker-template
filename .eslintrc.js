module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier/vue"
  ],
  plugins: [
    'prettier',
    'vue',
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "vue/max-attributes-per-line": [
      "error",
      {
        "singleline": 5,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }
    ]
  }
}
