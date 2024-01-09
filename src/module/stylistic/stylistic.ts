import { stylisticDisabledRule } from '@module/stylistic/rule/stylistic_disabled_rule';
import { stylisticGeneralRule } from '@module/stylistic/rule/stylistic_general_rule';

const stylistic = {
  plugins: [ '@stylistic/stylelint-plugin' ],
  rules: {
    ...stylisticGeneralRule,
    ...stylisticDisabledRule
  }
};

export { stylistic };