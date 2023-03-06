module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'overrides': [],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-undef': ['off'],
    'no-unused-vars': ['off'],
    'no-useless-escape': ['off'],
    'no-mixed-spaces-and-tabs': ['off'],
    'no-inner-declarations': ['off']
  }
}
