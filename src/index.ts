import { a11y } from './module/a11y/a11y';
import { order } from './module/order/order';
import { generalRule } from './module/stylelint/rule/general_rule';
import { disabledRule } from './module/stylelint/rule/disabled_rule';

const base =
{
  plugins: [
    ...order.plugins, ...a11y.plugins
  ],
  rules: {
    ...disabledRule,
    ...generalRule,
    ...order.rules,
    ...a11y.rules
  }
};

export = base;