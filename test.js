'use strict';

var desmotivacionais = require('./'),
		test = require('tape');

test('Return a random word', function(t){
	t.ok(desmotivacionais.random(), 'check if return one word');
	t.end();
});

test('Return all words', function(t){
	t.ok(Array.isArray(desmotivacionais.all), 'Check if words is array');
	t.ok(desmotivacionais.all[1].length,'Check if is content');
	t.end();
});