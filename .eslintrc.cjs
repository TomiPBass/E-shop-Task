/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-unused-vars': 'warn',
    'indent': ['warn', 2],
    'vue/html-indent': ['warn', 2],
    'no-unexpected-multiline': 'warn'
  }
}
