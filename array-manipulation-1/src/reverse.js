/* exported reverse */

/*
PSEUDOCODE:
Define a function named reverse that takes one parametery, array
Declare a variable to serve as the return value of the function and assign to it a value of an empty
array literal.
Use a loop to iterate through the array.

*/

function reverse(array) {
  const result = [];
  if (array === []) return array;
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}
