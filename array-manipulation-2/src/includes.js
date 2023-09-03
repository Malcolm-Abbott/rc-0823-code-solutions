/* exported includes */
function includes(array, value) {
  const result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return result;
}
