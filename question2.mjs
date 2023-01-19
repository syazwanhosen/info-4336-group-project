import { DOCUMENTS } from "./var.mjs";

const removeDuplicates = (obj) => {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key] = obj[key].filter((item, index) => {
        return obj[key].map((elem) => elem).indexOf(item) === index;
      });
    }
  }
  return obj;
};

const invertedIndex = (documents) => {
  let index = {};
  for (let i = 0; i < documents.length; i++) {
    let words = documents[i].split(" ");
    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      if (!index.hasOwnProperty(word)) {
        index[word] = [i];
      } else {
        index[word].push(i);
      }
    }
  }

  return removeDuplicates(index);
};

console.log(invertedIndex(DOCUMENTS));
