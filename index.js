"use strict";

import quotes from "./quotes.js";
import uniqueRandomArray from "unique-random-array";

const all = quotes;
const random = uniqueRandomArray(all);
export default {
  all,
  random
};
