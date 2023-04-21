const { appearance } = require('./groups/appearance');
const { boxModel } = require('./groups/box_model');
const { interaction } = require('./groups/interaction');
const { layout } = require('./groups/layout');
const { positioning } = require('./groups/positioning');
const { svg } = require('./groups/svg');
const { transition } = require('./groups/transition');
const { typography } = require('./groups/typography');

const propertyGroups = [
  ['composes'],
  ['all'],
  interaction,
  positioning,
  layout,
  boxModel,
  typography,
  appearance,
  svg,
  transition
];

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'never',
  properties
}));

const order = {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      [
        { type: 'at-rule', name: 'import' },
        { type: 'at-rule', name: 'forward' },
        { type: 'at-rule', name: 'use' },
        'dollar-variables',
        'at-variables',
        'custom-properties',
        { type: 'at-rule', name: 'custom-media' },
        { type: 'at-rule', name: 'function' },
        { type: 'at-rule', name: 'mixin' },
        { type: 'at-rule', name: 'extend' },
        { type: 'at-rule', name: 'include' },
        'declarations',
        {
          type: 'rule',
          selector: /^&::[\w-]+/,
          hasBlock: true
        },
        'rules',
        { type: 'at-rule', name: 'media', hasBlock: true }
      ],
      {
        severity: 'warning'
      }
    ],
    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
        emptyLineBeforeUnspecified: 'always',
        emptyLineMinimumPropertyThreshold: 5
      }
    ]
  }
};

module.exports = { order };