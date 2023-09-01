/* exported isUpperCased */

/*

PSEUDOCODE:

Prompt:
Define a function named isUpperCased which accepts one parameter, word, which represents a string value
and return a Boolean value from the function indicating whether or not all characters in the argument (word)
are Upper Cased.

Steps:
Define a function with the name of isUpperCased
Include a parameter called word, which represents a string
Declare a variable assigning to it the value of true;
Use a loop to iterate through each index element of the string
Compare each index element of the string to that same index element of the string in capitalized form.
If they are not referencing a value equal in value and data type, short circuit the loop and reassign
your initial variable storing the value of true to false
return the initial variable storing the Boolean value outside of the loop code block.
If the loop finishes iteration and hasn't found any falsy operands resulting
from comparing the index elements to each of their corresponding capitalized values,
the variable will return a result of true, otherwise it would have short circuited the loop iteration cycle
and moved to the next line of code returning the variable which would then have the value of false;

*/
function isUpperCased(word) {
  let result = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      result = false;
      break;
    }
  }
  return result;
}
