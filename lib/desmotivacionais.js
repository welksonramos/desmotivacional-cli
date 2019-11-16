#!/usr/bin/env node

const program = require('commander');
const say = require('say');
const quotes = require('../');
const quote = quotes.random();

const pkg = require('../package.json');
const log = console.log;

program
.version(`${pkg.name} v${pkg.version}`)
.usage('desmotivacional [options]')
.option('-a, --all', 'Displays all phrases')
.option('-s, --speak', 'Speak a unique quote')

program.on('--help', function(){});

program.parse(process.argv);

if(program.args.length >= 1) program.help();

const speakQuote = () => {
    log(quote)
    say.speak(quote, 1.0, err => {
        if(err) log(err)
    })
}

if(program.speak) speakQuote();
if(program) program.all ? log(quotes.all.sort().join('\n')): log(quote);