/* exported toObject */
function toObject(keyValuePair) {
  const result = {};
  result[keyValuePair[0]] = keyValuePair[1];
  return result;
}
