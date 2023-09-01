/* exported getWords */
function getWords(string) {
  let result = string.split(' ');
  if (string.length <= 0) result = [];
  return result;
}
