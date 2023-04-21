const { order } = require('./order/order');
const { rules } = require('./rule/rule');

const config =
{
  extends: [rules, order]
};

module.exports = config