/* exported reverseWord */

/*
We want to receive a word and create a new word being the reversed order of the previous word
*/
function reverseWord(word) {
  let result = '';
  for (let i = -1; i >= -word.length; i--) {
    result += word.at(i);
  }
  return result;
}
