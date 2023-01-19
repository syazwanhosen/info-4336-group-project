import { DOCUMENTS } from "./var.mjs";

const invertedIndexWithPositions = (documents) => {
  let index = {};
  for (let i = 0; i < documents.length; i++) {
    let words = documents[i].split(" ");
    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      if (!index.hasOwnProperty(word)) {
        index[word] = {};
        index[word][i] = [j];
      } else {
        if (!index[word].hasOwnProperty(i)) {
          index[word][i] = [j];
        } else {
          index[word][i].push(j);
        }
      }
    }
  }
  return index;
};

console.log(invertedIndexWithPositions(DOCUMENTS));
