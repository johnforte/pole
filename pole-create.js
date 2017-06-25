#!/usr/bin/env node
var program = require('commander');
var fs=require('fs');
var chalk=require('chalk');
var path = require('path');
var os = require('os');

var gitdir = '.git';
var hooksdir = 'hooks';

program.parse(process.argv);
var arguments = program.args;

var filename=arguments[0]
if(filename.split('.').pop()!='js'){
    filename+='.js';
}
if(!fs.existsSync(gitdir + path.sep + hooksdir+path.sep+'pole'+path.sep+filename)){
    fs.writeFile(gitdir + path.sep + hooksdir+path.sep+'pole'+path.sep+filename,createScript(),{mode:493}, function(err) {
      if (err) {
        console.log(chalk.red(err));
        return console.log(err);
      }
    });
    console.log(chalk.green('You are ready to start developing at '+gitdir + path.sep + hooksdir+path.sep+'pole'+path.sep+filename));
}else{
    console.log(chalk.red(filename+' exist already'));
}

function createScript(){
    return '#!/usr/bin/env node'+os.EOL+'module.exports = function(gitobject){'+os.EOL+os.EOL+os.EOL+'};';
}
