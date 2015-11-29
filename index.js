'use strict';

var desmotivacionais = require('./desmotivacionais.json'),
uniqueRandomArray = require('unique-random-array');

module.exports.all = desmotivacionais;
module.exports.random = uniqueRandomArray(desmotivacionais);