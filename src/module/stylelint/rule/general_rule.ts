const generalRule =
{
  'alpha-value-notation': 'number',
  'annotation-no-unknown': true,
  'at-rule-disallowed-list': [ 'debug' ],
  'at-rule-no-unknown': true,
  'at-rule-no-vendor-prefix': true,
  'block-no-empty': true,
  'color-function-notation': 'legacy',
  'color-hex-alpha': 'never',
  'color-hex-length': 'long',
  'color-named': 'never',
  'color-no-invalid-hex': true,
  'comment-empty-line-before': 'never',
  'comment-no-empty': true,
  'comment-whitespace-inside': 'always',
  'custom-property-empty-line-before': 'never',
  'custom-property-no-missing-var-function': true,
  'declaration-block-no-duplicate-custom-properties': true,
  'declaration-block-no-duplicate-properties': true,
  'declaration-block-no-shorthand-property-overrides': true,
  'declaration-block-single-line-max-declarations': 1,
  'declaration-empty-line-before': [
    'always',
    {
      except: [ 'after-declaration', 'first-nested' ],
      ignore: [ 'after-comment', 'inside-single-line-block' ]
    }
  ],
  'declaration-no-important': true,
  'font-family-name-quotes': 'always-unless-keyword',
  'font-family-no-duplicate-names': true,
  'function-calc-no-unspaced-operator': true,
  'function-linear-gradient-no-nonstandard-direction': true,
  'function-name-case': 'lower',
  'function-no-unknown': true,
  'function-url-no-scheme-relative': true,
  'function-url-quotes': 'always',
  'hue-degree-notation': 'angle',
  'import-notation': 'string',
  'keyframe-block-no-duplicate-selectors': true,
  'keyframe-declaration-no-important': true,
  'keyframe-selector-notation': 'percentage',
  'length-zero-no-unit': true,
  'max-nesting-depth':
    [
      1,
      {
        ignoreAtRules: [
          'pseudo-classes',
          'each',
          'media',
          'supports',
          'include'
        ]
      }
    ],
  'media-feature-name-no-unknown': true,
  'media-feature-name-no-vendor-prefix': true,
  'media-feature-range-notation': 'prefix',
  'named-grid-areas-no-invalid': true,
  'no-descending-specificity': true,
  'no-duplicate-at-import-rules': true,
  'no-duplicate-selectors': true,
  'no-empty-source': true,
  'no-invalid-double-slash-comments': true,
  'no-invalid-position-at-import-rule': true,
  'no-irregular-whitespace': true,
  'no-unknown-animations': true,
  'number-max-precision': 2,
  'property-no-unknown': true,
  'property-no-vendor-prefix': true,
  'rule-empty-line-before': [
    'always-multi-line',
    {
      except: [ 'first-nested' ],
      ignore: [ 'after-comment' ]
    }
  ],
  'selector-anb-no-unmatchable': true,
  'selector-attribute-quotes': 'always',
  'selector-class-pattern': [
    '^[a-z0-9\\-_/]+$',
    {
      message: 'Selector should be written in lowercase with hyphens (selector-class-pattern)'
    }
  ],
  'selector-max-compound-selectors': 3,
  'selector-max-id': 0,
  'selector-no-qualifying-type': [ true, { ignore: [ 'attribute' ] } ],
  'selector-no-vendor-prefix': true,
  'selector-not-notation': 'complex',
  'selector-pseudo-class-no-unknown': true,
  'selector-pseudo-element-colon-notation': 'double',
  'selector-pseudo-element-no-unknown': true,
  'selector-type-case': 'lower',
  'selector-type-no-unknown': true,
  'shorthand-property-no-redundant-values': true,
  'string-no-newline': true,
  'unit-no-unknown': true,
  'value-keyword-case': 'lower',
  'value-no-vendor-prefix': true
};

export { generalRule };