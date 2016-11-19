#!/usr/bin/env node

const { join } = require('path');
const yargs = require('yargs');
const asciify = require('asciify');

asciify('TypeSetter', { color:'green', font:'bell' }, (err, res) => {
    console.log(res);
    yargs
      .commandDir(join(__dirname, 'commands'))
      .demand(1)
      .help()
      .argv
});
