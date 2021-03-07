module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    'nuxt/no-cjs-in-config': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    camelcase: 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      processor: 'vue/.vue'
    }
  ]
}
