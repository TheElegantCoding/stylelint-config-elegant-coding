import { codeGuideDisabledRule } from './rule/code_guide_disabled_rule';
import { codeGuideGeneralRule } from './rule/code_guide_general_rule';

const codeGuide = {
  plugins: [ 'stylelint-codeguide' ],
  rules: {
    ...codeGuideGeneralRule,
    ...codeGuideDisabledRule
  }
};

export { codeGuide };