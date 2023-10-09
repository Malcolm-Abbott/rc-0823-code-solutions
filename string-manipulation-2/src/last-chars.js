/* exported lastChars */
function lastChars(length, string) {
  const stringToArray = string.split('');
  let result = '';
  for (let i = -length; i < 0; i++) {
    if (stringToArray.at(i) !== undefined) result += stringToArray.at(i);
  }
  return result;
}
