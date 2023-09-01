/* exported getValues */

/*
define a function named getValues which takes one parameter: object
Declare a variable which will be used as the variable to return at the end of the function and assign to it
the value of an array literal
Use a loop to iterate through the object:
  append the property values (not the property names) to the variable of an array literal.

*/
function getValues(object) {
  const result = [];
  for (const prop in object) {
    result.push(object[prop]);
  }
  return result;
}
