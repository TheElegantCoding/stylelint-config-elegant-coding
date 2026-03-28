import eslintConfig from 'eslint-config-universal-code';

const config = eslintConfig({
  json: true,
  stylistic: true,
  typescript: true,
  perfectionist: true,
  unicorn: true,
  yml: true
});

export default config;