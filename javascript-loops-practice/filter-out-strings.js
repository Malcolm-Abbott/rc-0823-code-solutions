/* exported filterOutStrings */
function filterOutStrings(values) {
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === typeof '') continue;
    result.push(values[i]);
  }
  return result;
}
