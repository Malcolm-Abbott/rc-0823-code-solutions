/* exported initial */

/*
PSEUDOCODE:
Define a function named initial that takes one parameter, array
If it's an emtpy array, return an empty array
Otherwise, subtract 1 from the length property of array and assign the result of that expression to the
length property of the array object.
Return array.
*/

function initial(array) {
  if (array.length === 0) return array;
  array.length = array.length - 1;
  return array;
}
