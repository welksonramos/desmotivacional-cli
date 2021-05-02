"use strict";

import quotes from "./quotes.js";
import uniqueRandomArray from "unique-random-array";

const desmotivacionais = quotes;
const random = uniqueRandomArray(desmotivacionais);

export default {
  desmotivacionais,
  random
};
