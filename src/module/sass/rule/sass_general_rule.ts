const sassGeneralRule =
{
  'scss/at-each-key-value-single-line': true,
  'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
  'scss/at-else-closing-brace-space-after': 'always-intermediate',
  'scss/at-else-if-parentheses-space-before': 'never',
  'scss/at-extend-no-missing-placeholder': true,
  'scss/at-function-named-arguments': 'never',
  'scss/at-function-parentheses-space-before': 'never',
  'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

  'scss/at-if-no-null': true,
  'scss/at-import-partial-extension-blacklist': [ 'scss' ],
  'scss/at-mixin-argumentless-call-parentheses': 'always',
  'scss/at-mixin-parentheses-space-before': 'never',
  'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-_]+[a-z0-9]+)?$',
  'scss/at-rule-no-unknown': true,
  'scss/at-use-no-redundant-alias': true,
  'scss/at-use-no-unnamespaced': true,
  'scss/block-no-redundant-nesting': true,
  'scss/comment-no-empty': true,
  'scss/declaration-nested-properties': 'never',
  'scss/dollar-variable-colon-newline-after': 'always-multi-line',
  'scss/dollar-variable-colon-space-after': 'always',
  'scss/dollar-variable-colon-space-before': 'never',
  'scss/dollar-variable-first-in-block': true,
  'scss/dollar-variable-no-namespaced-assignment': true,
  'scss/dollar-variable-pattern': '^[_]?[a-z0-9]+([a-z0-9_]+[a-z0-9]+)?$',
  'scss/double-slash-comment-whitespace-inside': 'always',
  'scss/function-calculation-no-interpolation': true,
  'scss/function-color-relative': true,
  'scss/function-no-unknown': true,
  'scss/function-quote-no-quoted-strings-inside': true,
  'scss/function-unquote-no-unquoted-strings-inside': true,
  'scss/load-no-partial-leading-underscore': true,
  'scss/no-duplicate-mixins': true,
  'scss/no-global-function-names': true,
  'scss/operator-no-unspaced': true,
  'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
  'scss/property-no-unknown': true,
  'scss/selector-no-redundant-nesting-selector': true,
  'scss/selector-no-union-class-name': true
};

export { sassGeneralRule };