/* exported compact */

/*

PSEUDOCODE:
Define a function named compact that takes one parameter, array
Return the array with only truthy operands

Declare a variable to store the return value of the function and assign it a value of an empty array literal.
Use a loop to iterate through the array
During each iteration,
    if the array index element evaluates to a falsy operand, continue to the next iteration
    if the array index element evaluates to a truthy operand, append the index element to the return variable.
Return the return variable

 */

function compact(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) continue;
    result.push(array[i]);
  }
  return result;
}
