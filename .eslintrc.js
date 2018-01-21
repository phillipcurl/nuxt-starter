module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'prettier',
  // required to lint *.vue files
  plugins: ['html'],
  globals: {}
};
