#!/usr/bin/env node

//this file setups all of poles requirements so it will work correctly with git
var fs = require('fs');
var chalk = require('chalk');
var path = require('path');
var os = require('os');
var hooks = require('./hooks.json');

var gitdir = '.git';
var hooksdir = 'hooks';

if (!fs.existsSync(gitdir)) {
  //if .git isn't present this directory is not using git
  //TODO: recursive check up the folder stucture for git
  console.log(chalk.red('Current working directory is not a git repo'));
  process.exit()
} else {
  if (!fs.existsSync(gitdir + path.sep + hooksdir)) {
    fs.mkdirSync(gitdir + path.sep + hooksdir);
  }
  if (!fs.existsSync(gitdir + path.sep + hooksdir+path.sep+'pole')) {
    fs.mkdirSync(gitdir + path.sep + hooksdir+path.sep+'pole');
  }
  //creates all hook scripts using a json file (hooks.json) as the list of hooks
  for (var i = 0; i < hooks.length; i++) {
    fs.writeFile(gitdir + path.sep + hooksdir+path.sep+hooks[i],createscript(hooks[i]),{mode:493}, createscript(hooks[i]), function(err) {
      if (err) {
        console.log(chalk.red(err));
        return console.log(err);
      }
    });
  }
  console.log(chalk.green('Git repo is now setup for pole'));
}

//This function creates the script that will route all git hooks back to pole for dispatching to the other scripts.
function createscript(git_hook){
   return '#!/usr/bin/env bash'+os.EOL+'pole dispatch '+git_hook+' $@';
}
