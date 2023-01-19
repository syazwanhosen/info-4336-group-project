import { DOCUMENTS } from "./var.mjs";

const invertedIndexWithCounts = (documents) => {
  let index = {};
  for (let i = 0; i < documents.length; i++) {
    let words = documents[i].split(" ");
    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      if (!index.hasOwnProperty(word)) {
        index[word] = {};
        index[word][i] = 1;
      } else {
        if (!index[word].hasOwnProperty(i)) {
          index[word][i] = 1;
        } else {
          index[word][i]++;
        }
      }
    }
  }
  return index;
};

console.log(invertedIndexWithCounts(DOCUMENTS));
