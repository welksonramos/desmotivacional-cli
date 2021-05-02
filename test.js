"use strict";

import quotes from "./index.js";
import test from "ava";

test("Retorna uma frase aleatória", t => {
	t.is(typeof quotes.random(), "string");
});

test("Retorna todas as frases", t => {
	const totalQuotes = quotes.all.length;
	t.is(quotes.all.length,  totalQuotes);
});

test("Checa se é um array de frases", t => {
	if(Array.isArray(quotes.all)) {
		for (let quote of quotes.all) {
			t.is(typeof quote, "string");
		}
	}
});
