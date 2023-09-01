/* exported tail */

/*
PSEUDOCODE:
Define a function named tail that takes one parameter, array.
Declare a variable to store the return value and assign to it a value of an empty array literal
Use a loop to iterate starting from the second element in the array instead of starting with the first
element in the array.
During each iteration, push the elements from the array into the return variable.
Return the return variable outside of the loop body (after).
*/

function tail(array) {
  const result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
