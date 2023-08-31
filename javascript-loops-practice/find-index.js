/* exported findIndex */
function findIndex(array, value) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result = i;
      break;
    }
  }
  return result;
}
