const rule =
{
    // Descending
    'no-descending-specificity': true,
    // Duplicate
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'font-family-no-duplicate-names': true,
    'keyframe-block-no-duplicate-selectors': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    // Empty
    'block-no-empty': true,
    'comment-no-empty': true,
    'no-empty-source': true,
    // invalid
    'color-no-invalid-hex': true,
    'function-calc-no-unspaced-operator': true,
    'keyframe-declaration-no-important': true,
    'named-grid-areas-no-invalid': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'string-no-newline': true,
    // Irregular
    'no-irregular-whitespace': true,
    // Missing
    'custom-property-no-missing-var-function': true,
    'font-family-no-missing-generic-family-keyword': true,
    // Non-standard
    'function-linear-gradient-no-nonstandard-direction': true,
    // Overrides
    'declaration-block-no-shorthand-property-overrides': true,
    // Unmatchable
    'selector-anb-no-unmatchable': true,
    // Unknown
    'annotation-no-unknown': true,
    'at-rule-no-unknown': true,
    'declaration-property-value-no-unknown': true,
    'function-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'no-unknown-animations': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'unit-no-unknown': true,
    /*
     *  Enforce conventions
     *  Allowed, disallowed & required
     */
    'at-rule-disallowed-list': ['debug'],
    'at-rule-no-vendor-prefix': true,
    'color-hex-alpha': 'never',
    'color-named': 'never',
    'color-no-hex': null,
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list':
    {
      border: ['none'],
      'border-top': ['none'],
      'border-right': ['none'],
      'border-bottom': ['none'],
      'border-left': ['none']
    },
    'function-url-no-scheme-relative': true,
    'length-zero-no-unit': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute']
      }
    ],
    'selector-no-vendor-prefix': true,
    'unit-allowed-list': ['rem', '%', 'em', 's'],
    'value-no-vendor-prefix': true,
    // Case
    'function-name-case': 'lower',
    'selector-type-case': 'lower',
    'value-keyword-case': 'lower',
    // Empty lines
    'at-rule-empty-line-before':
    [
      'always',
      {
        ignore: [
          'first-nested',
          'blockless-after-same-name-blockless'
        ]
      }
    ],
    'comment-empty-line-before': "always",
    'custom-property-empty-line-before': 'never',
    'declaration-empty-line-before':
    [
      'always',
      {
        ignore: [
          'after-declaration'
        ]
      }
    ],
    'rule-empty-line-before': 'always-multi-line',
    'declaration-block-single-line-max-declarations': 1,
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
    'number-max-precision': 2,
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'color-hex-length': 'long',
    'hue-degree-notation': 'angle',
    'import-notation': 'string',
    'keyframe-selector-notation': 'percentage',
    'media-feature-range-notation': 'prefix',
    'selector-not-notation': 'complex',
    'selector-pseudo-element-colon-notation': 'double',
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'declaration-block-no-redundant-longhand-properties': true,
    'shorthand-property-no-redundant-values': true,
    'comment-whitespace-inside': 'always',
    'selector-class-pattern': [
      '^[a-z0-9\\-]+$',
      {
        message:
          'Selector should be written in lowercase with hyphens (selector-class-pattern)'
      }
    ]
};

module.exports = { rule };