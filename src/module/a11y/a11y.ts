import { a11yGeneralRule } from './rule/a11y_general_rule';

const a11y =
{
  plugins: [ 'stylelint-a11y' ],
  rules: {
    ...a11yGeneralRule
  }
};

export { a11y };