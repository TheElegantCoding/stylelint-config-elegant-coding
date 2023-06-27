import { svg } from './group/svg';
import { layout } from './group/layout';
import { boxModel } from './group/box_model';
import { typography } from './group/typography';
import { appearance } from './group/appearance';
import { transition } from './group/transition';
import { interaction } from './group/interaction';
import { positioning } from './group/positioning';

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
  properties,
  emptyLineBefore: 'never',
  noEmptyLineBetween: true
}));

const order = {
  plugins: [ 'stylelint-order' ],
  rules: {
    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
        emptyLineBeforeUnspecified: 'always',
        emptyLineMinimumPropertyThreshold: 5
      }
    ],
    'order/order': [
      [
        { name: 'import', type: 'at-rule' },
        { type: 'at-rule', name: 'forward' },
        { name: 'use', type: 'at-rule' },
        'dollar-variables',
        'at-variables',
        'custom-properties',
        { type: 'at-rule', name: 'custom-media' },
        { type: 'at-rule', name: 'function' },
        { name: 'mixin', type: 'at-rule' },
        { name: 'extend', type: 'at-rule' },
        { type: 'at-rule', name: 'include' },
        'declarations',
        {
          type: 'rule',
          hasBlock: true,
          selector: /^&::[\w-]+/u
        },
        'rules',
        { name: 'media', hasBlock: true, type: 'at-rule' }
      ],
      {
        severity: 'warning'
      }
    ]
  }
};

export { order };