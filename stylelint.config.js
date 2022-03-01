/**
 * https://stylelint.io/user-guide/rules
 */
module.exports = {
  // ignoreFiles: ["**/*.js", "theme/"],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [/^\/deep\/.*$/]
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['/^deep/', 'pseudo-class']
      }
    ],
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: [/^selector.*$/]
      }
    ],
    'no-empty-source': null,
    'no-descending-specificity': [true, { severity: 'warning' }],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extend']
      }
    ]
  }
}
