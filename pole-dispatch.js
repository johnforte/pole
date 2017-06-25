#!/usr/bin/env node
var program = require('commander');
var fs=require('fs');
var path = require('path');
var branch = require('git-branch');

program.parse(process.argv);
var arguments = program.args;

var gitdir = '.git';
var hooksdir = 'hooks';

//Builds dependency injection object
var gitobject={};
gitobject.hook=arguments[0];
gitobject.parameters=(typeof arguments[1] != 'undefined')? arguments[1]:'';
gitobject.branch=branch.sync();

if(!fs.existsSync(gitdir + path.sep + hooksdir+path.sep+'pole')){
  fs.readdirSync(gitdir + path.sep + hooksdir+path.sep+'pole').forEach(function (file) {
      require(__dirname+gitdir + path.sep + hooksdir+path.sep+'pole'+path.sep+file)(gitobject);
  });
}
