'use strict';

// const desmotivacionais = require('./desmotivacionais.json');
const desmotivacionais = require('./quotes');
const uniqueRandomArray = require('unique-random-array');

module.exports.all = desmotivacionais;
module.exports.random = uniqueRandomArray(desmotivacionais);