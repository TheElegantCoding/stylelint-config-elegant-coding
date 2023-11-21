import { appearance } from './group/appearance';
import { boxModel } from './group/box_model';
import { interaction } from './group/interaction';
import { layout } from './group/layout';
import { positioning } from './group/positioning';
import { svg } from './group/svg';
import { transition } from './group/transition';
import { typography } from './group/typography';

const propertyGroups = [
  [ 'composes' ],
  [ 'all' ],
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
  emptyLineBefore: 'never',
  noEmptyLineBetween: true,
  properties
}));

const order = {
  plugins: [ 'stylelint-order' ],
  rules: {
    'order/order': [
      [
        {
          name: 'import',
          type: 'at-rule'
        },
        {
          name: 'forward',
          type: 'at-rule'
        },
        {
          name: 'use',
          type: 'at-rule'
        },
        'dollar-variables',
        'at-variables',
        'custom-properties',
        {
          name: 'custom-media',
          type: 'at-rule'
        },
        {
          name: 'function',
          type: 'at-rule'
        },
        {
          name: 'mixin',
          type: 'at-rule'
        },
        {
          name: 'extend',
          type: 'at-rule'
        },
        {
          name: 'include',
          type: 'at-rule'
        },
        'declarations',
        {
          hasBlock: true,
          selector: /^&::[\w-]+/u,
          type: 'rule'
        },
        'rules',
        {
          hasBlock: true,
          name: 'media',
          type: 'at-rule'
        }
      ],
      {
        severity: 'warning'
      }
    ],
    'order/properties-order': [
      propertiesOrder,
      {
        emptyLineBeforeUnspecified: 'always',
        emptyLineMinimumPropertyThreshold: 5,
        severity: 'warning',
        unspecified: 'bottomAlphabetical'
      }
    ]
  }
};

export { order };