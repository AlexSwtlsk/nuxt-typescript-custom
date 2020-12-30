module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    'no-console': ['error', { allow: ['error'] }],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        selfClosingTag: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      1,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: []
      }
    ],
    'vue/component-name-in-template-casing': 2,
    'vue/singleline-html-element-content-newline': [
      'off',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea']
      }
    ]
  },
  env: {
    node: true,
    'jest/globals': true
  },
  plugins: ['jest']
}
