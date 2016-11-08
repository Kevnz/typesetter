#!/usr/bin/env node

const { join } = require('path')
const yargs = require('yargs')
const argv = require('yargs').argv


yargs
  .commandDir(join(__dirname, 'commands'))
  .demand(1)
  .help()
  .argv
