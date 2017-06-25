#!/usr/bin/env node
var program = require('commander');

program
  .version('1.0.0')
  .command('init', 'sets up the git repo to handle hooks')
  .command('dispatch <hook> [args]','Callback for git')
  .parse(process.argv);
