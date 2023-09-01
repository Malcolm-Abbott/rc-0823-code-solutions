/* exported getKeys */

/*
PSEUDOCODE:
Define a function named getKeys which takes on parameter: object
Declare a variable which will serve as the end of function return variable and assign to it a value of an
empty array literal.
Use a loop to iterate through the object.
During each iteration.
  Push the property name (not the property value) into the variable of an array literal
Return variable.

*/
function getKeys(object) {
  const result = [];
  for (const prop in object) {
    result.push(prop);
  }
  return result;
}
