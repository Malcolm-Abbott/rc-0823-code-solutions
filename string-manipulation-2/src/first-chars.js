/* exported firstChars */
function firstChars(length, string) {
  const stringToArray = string.split('');
  stringToArray.length = length;
  const result = stringToArray.join('');
  return result;
}
