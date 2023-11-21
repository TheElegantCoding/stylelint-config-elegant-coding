import { a11y } from './module/a11y/a11y';
import { codeGuide } from './module/code_guide/code_guide';
import { order } from './module/order/order';
import { disabledRule } from './module/stylelint/rule/disabled_rule';
import { generalRule } from './module/stylelint/rule/general_rule';

const base =
{
  plugins: [ ...order.plugins, ...a11y.plugins, ...codeGuide.plugins ],
  rules: {
    ...disabledRule,
    ...generalRule,
    ...order.rules,
    ...codeGuide.rules,
    ...a11y.rules
  }
};

export = base;