/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') return 'JavaScript';
  let result = word[0].toUpperCase();
  let counter = 1;
  while (counter < word.length) {
    result += word[counter].toLowerCase();
    counter++;
  }
  return result;
}
