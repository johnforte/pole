Pole
===
Pole is aimed in making git hooks easier to deploy and write.

Installing
=====

    npm install -g johnforte/pole

Usage
=====
    % git init
     Initialized empty Git repository
    % pole init
    Git repo is now setup for pole
    % pole create test-2.js
    You are ready to start developing at .git/hooks/pole/test-2.js

Now you are ready to use pole.

Develop all your modules in .git/hooks/pole, and they will automatically be loaded and passed an object...

    { hook: 'pre-commit', parameters: '', branch: 'master' }
