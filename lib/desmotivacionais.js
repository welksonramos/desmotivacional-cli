#!/usr/bin/env node
import program from "commander";
import say from "say";
import quotes from "../index.js";
const quote = quotes.random();
import { readFile } from 'fs/promises';
const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url)));
const { log } = console;

program
.version(`${pkg.name} v${pkg.version}`)
.usage('desmotivacional [options]')
.option('-a, --all', 'Displays all phrases')
.option('-s, --speak', 'Speak a unique quote')

program.on('--help', function(){});

program.parse(process.argv);
const options = program.opts();

if(program.args.length >= 1) program.help();

const speakQuote = () => {
    say.speak(quote, 1.0, err => {
        if(err) log(err);
    });
}
if(options.speak) speakQuote();
(options && options.all) ? log(quotes.all.sort().join("\n")) : log(quote);

