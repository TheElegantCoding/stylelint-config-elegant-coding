const { order } = require('./order/order');
const { rule } = require('./rule/rule');

const config =
{
  ...order.plugins,
  rules: {
    ...rule,
    ...order.rules
  }
};

module.exports = config;