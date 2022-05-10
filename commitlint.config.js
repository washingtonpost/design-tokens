const {readdirSync, statSync} = require('fs');
const {join} = require('path');

const packages = readdirSync('./packages').filter(f => statSync(join('./packages', f)).isDirectory());

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['fix', 'feat', 'build', 'docs', 'perf', 'test', 'chore']],
    'scope-case': [0, 'always', 'lower-case'],
    'scope-enum': [1, 'always', [...packages, 'dependencies', 'build']]
  }
};
