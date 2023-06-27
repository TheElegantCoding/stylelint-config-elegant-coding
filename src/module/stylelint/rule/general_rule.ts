const generalRule =
{
  'selector-max-id': 0,
  'color-named': 'never',
  'block-no-empty': true,
  'unit-no-unknown': true,
  'no-empty-source': true,
  'comment-no-empty': true,
  'number-max-precision': 2,
  'string-no-newline': true,
  'color-hex-length': 'long',
  'color-hex-alpha': 'never',
  'at-rule-no-unknown': true,
  'import-notation': 'string',
  'length-zero-no-unit': true,
  'property-no-unknown': true,
  'function-no-unknown': true,
  'color-no-invalid-hex': true,
  'value-keyword-case': 'lower',
  'selector-type-case': 'lower',
  'function-name-case': 'lower',
  'no-unknown-animations': true,
  'annotation-no-unknown': true,
  'hue-degree-notation': 'angle',
  'value-no-vendor-prefix': true,
  'no-duplicate-selectors': true,
  'function-url-quotes': 'always',
  'no-irregular-whitespace': true,
  'alpha-value-notation': 'number',
  'declaration-no-important': true,
  'at-rule-no-vendor-prefix': true,
  'selector-type-no-unknown': true,
  'selector-no-vendor-prefix': true,
  'property-no-vendor-prefix': true,
  'no-descending-specificity': true,
  'selector-not-notation': 'complex',
  'color-function-notation': 'legacy',
  'selector-anb-no-unmatchable': true,
  'named-grid-areas-no-invalid': true,
  'selector-max-compound-selectors': 3,
  'comment-empty-line-before': 'never',
  'no-duplicate-at-import-rules': true,
  'comment-whitespace-inside': 'always',
  'selector-attribute-quotes': 'always',
  'media-feature-name-no-unknown': true,
  'at-rule-disallowed-list': [ 'debug' ],
  'font-family-no-duplicate-names': true,
  'function-url-no-scheme-relative': true,
  'media-feature-range-notation': 'prefix',
  'selector-pseudo-class-no-unknown': true,
  'no-invalid-double-slash-comments': true,
  'keyframe-declaration-no-important': true,
  'keyframe-selector-notation': 'percentage',
  'selector-pseudo-element-no-unknown': true,
  'no-invalid-position-at-import-rule': true,
  'function-calc-no-unspaced-operator': true,
  'media-feature-name-no-vendor-prefix': true,
  'custom-property-empty-line-before': 'never',
  'keyframe-block-no-duplicate-selectors': true,
  'shorthand-property-no-redundant-values': true,
  'custom-property-no-missing-var-function': true,
  'declaration-block-no-duplicate-properties': true,
  'font-family-name-quotes': 'always-unless-keyword',
  'selector-pseudo-element-colon-notation': 'double',
  'declaration-block-single-line-max-declarations': 1,
  'declaration-block-no-duplicate-custom-properties': true,
  'declaration-block-no-shorthand-property-overrides': true,
  'function-linear-gradient-no-nonstandard-direction': true,
  'declaration-block-no-redundant-longhand-properties': true,
  'selector-no-qualifying-type': [ true, { ignore: [ 'attribute' ] } ],
  'rule-empty-line-before': [
    'always-multi-line',
    {
      except: [ 'first-nested' ],
      ignore: [ 'after-comment' ]
    }
  ],
  'selector-class-pattern': [
    '^[a-z0-9\\-_/]+$',
    {
      message: 'Selector should be written in lowercase with hyphens (selector-class-pattern)'
    }
  ],
  'declaration-empty-line-before': [
    'always',
    {
      except: [ 'after-declaration', 'first-nested' ],
      ignore: [ 'after-comment', 'inside-single-line-block' ]
    }
  ],
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
    ]
};

export { generalRule };