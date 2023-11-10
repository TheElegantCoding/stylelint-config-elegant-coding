import { sassDisabledRule } from './module/sass/rule/sass_disabled_rule';
import { sassGeneralRule } from './module/sass/rule/sass_general_rule';

const sass =
{
  customSyntax: 'postcss-scss',
  plugins: [ 'stylelint-scss' ],
  rules: {
    ...sassDisabledRule,
    ...sassGeneralRule
  }
};

export = sass;