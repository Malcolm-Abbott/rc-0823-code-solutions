/* exported isLowerCased */

/*
PSUEDOCODE:

Prompt:
Define a function named isLowerCased that accepts one parameter, word, which is a string value
Return a Boolean value referencing whether or not all index elements in the string are lower cased

Define a function giving it the name isLowerCased
It accepts one parameter: word, representing a string value
Declare a variable assigning it a value of true;
Use a loop to iterate through each index element of the string
In each iteration, compare the index element with the equivalent index element in lower Cased form
If they are not strictly equal, reassign the variable storing the value of true to store a value of false
and short circuit from the loop.
The next code your function should see (after the loop) is a return statement returning the variable
storing the boolean value.
If no short circuiting occured, the value true will be returned indicating that all of the index elements are
lower cased.
If short circuiting occured, the value false will be returned indicating that all of the index elements are
not lower cased.

*/

function isLowerCased(word) {
  let result = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      result = false;
      break;
    }
  }
  return result;
}
