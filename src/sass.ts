import { sassGeneralRule } from './module/sass/rule/sass_general_rule';
import { sassDisabledRule } from './module/sass/rule/sass_disabled_rule';

const sass =
{
  customSyntax: 'postcss-scss',
  rules: {
    ...sassDisabledRule,
    ...sassGeneralRule
  }
};

export = sass;