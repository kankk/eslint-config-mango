const rules = require('./rules');

module.exports = {
  'root': true,

  'env': {
    'browser': true,
    'node': true,
    'amd': false,
  },

  'parserOptions': {
    ecmaVersion: 6,
    sourceType: 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
    },
  },

  'rules': rules
};
