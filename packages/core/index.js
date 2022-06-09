#!/usr/bin/env node

'use strict';

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

if (major < 14) {
  console.error("你当前的Node版本低于14，请清新你本地的Node版本")
  process.exit(1);
}

const { init } = require('./bin/index.cjs');

init();