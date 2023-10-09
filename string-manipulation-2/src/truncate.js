/* exported truncate */
function truncate(length, string) {
  let counter = 0;
  let result = '';
  if (string === '') return '...';
  if (length > string.length) return `${string}...`;
  while (counter < length) {
    result += string[counter];
    counter++;
  }
  result += '...';
  return result;
}
