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
    'nuxt/no-cjs-in-config': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'vue/comment-directive': 'off',
    camelcase: 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
}
