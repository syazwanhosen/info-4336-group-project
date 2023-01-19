import { WORDS } from "./var.mjs";

const DOCUMENTS =
  WORDS.S0 +
  WORDS.S1 +
  WORDS.S2 +
  WORDS.S3 +
  WORDS.S4 +
  WORDS.S5 +
  WORDS.S6 +
  WORDS.S7 +
  WORDS.S8 +
  WORDS.S9;

console.log(DOCUMENTS.split(" ").sort());
