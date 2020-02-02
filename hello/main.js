'use strict'

const greet = require('./hello');

process.nextTick(function() {
  console.log('nextTick event!');
});

greet('hello');
