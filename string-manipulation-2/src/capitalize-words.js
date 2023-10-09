/* exported capitalizeWords */
function capitalizeWords(string) {
  const array1 = string.split(' ');
  let word = '';
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    word += array1[i].slice(0, 1).toUpperCase();
    word += array1[i].slice(1).toLowerCase();
    result.push(word);
    word = '';
  }
  const finalResult = result.join(' ');
  return finalResult;
}
