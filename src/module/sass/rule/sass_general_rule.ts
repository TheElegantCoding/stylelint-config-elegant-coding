const sassGeneralRule =
{
  'scss/at-if-no-null': true,
  'scss/comment-no-empty': true,
  'scss/at-rule-no-unknown': true,
  'scss/function-no-unknown': true,
  'scss/no-duplicate-mixins': true,
  'scss/operator-no-unspaced': true,
  'scss/at-use-no-unnamespaced': true,
  'scss/no-global-function-names': true,
  'scss/at-mixin-named-arguments': 'never',
  'scss/at-each-key-value-single-line': true,
  'scss/no-duplicate-dollar-variables': true,
  'scss/at-function-named-arguments': 'never',
  'scss/dollar-variable-first-in-block': true,
  'scss/at-extend-no-missing-placeholder': true,
  'scss/at-mixin-parentheses-space-before': 'never',
  'scss/dollar-variable-colon-space-after': 'always',
  'scss/dollar-variable-colon-space-before': 'never',
  'scss/at-else-if-parentheses-space-before': 'never',
  'scss/selector-no-redundant-nesting-selector': true,
  'scss/at-function-parentheses-space-before': 'never',
  'scss/at-import-no-partial-leading-underscore': true,
  'scss/at-mixin-argumentless-call-parentheses': 'always',
  'scss/double-slash-comment-whitespace-inside': 'always',
  'scss/at-import-partial-extension-blacklist': [ 'scss' ],
  'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
  'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
  'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
  'scss/dollar-variable-pattern': '^[_]?[a-z0-9]+([a-z0-9_]+[a-z0-9]+)?$'
};

export { sassGeneralRule };