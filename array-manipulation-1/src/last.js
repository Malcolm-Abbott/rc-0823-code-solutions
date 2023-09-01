/* exported last */

/*
PSEUDOCODE:
Define a function with the name last that takes one parameter, array
Define a variable to store the return value and assign it a value of the last index element of the array
If the array is empty, reassign the return variable to have a value of an empty array
Return the result.
*/

function last(array) {
  let result = array[array.length - 1];
  if (array === []) result = [];
  return result;
}
