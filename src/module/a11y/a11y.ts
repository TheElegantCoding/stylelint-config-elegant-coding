import { a11yDisabledRule } from './rule/a11y_disabled_rule';
import { a11yGeneralRule } from './rule/a11y_general_rule';

const a11y =
{
  plugins: [ 'stylelint-a11y' ],
  rules: {
    ...a11yDisabledRule,
    ...a11yGeneralRule
  }
};

export { a11y };