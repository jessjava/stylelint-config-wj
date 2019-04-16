"use strict";

const orderRules = require("./rules/order");

module.exports = {
  extends: [
    "stylelint-config-standard"
  ],
  plugins: [
    "stylelint-order"
  ],
  rules: Object.assign({}, orderRules)
};
