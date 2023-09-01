/* exported capitalize */

/*

PSEUDOCODE:

Define a function named capitlize which accepts one parameter, word, which represents a string value
Declare a variable and assign the first index element in Capitalized form as its value.
Declare a variable named counter assigning to it the value of 1.
Use a loop to iterate through the rest of the index elements (excluding the first one).
During the iteration, convert each index element to lower case form, add it to the
value of result and reassign the result of that expression's value to the variable referencing the
capitalized first index element so that during each iteration, a lower case index element is being
concatenated with the capitalized first index element.
At the end of the cycles of iteration (loop), when the conditional expression results to a falsy operand,
your variable should now contain the full string argument with the first character capitalized and the rest
of the letters in lower case.


*/

function capitalize(word) {
  let result = word[0].toUpperCase();
  let counter = 1;
  while (counter < word.length) {
    result += word[counter].toLowerCase();
    counter++;
  }
  return result;
}
