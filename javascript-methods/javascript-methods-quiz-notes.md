# javascript-methods-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

In order to track what is happening with our code.
To catch errors and bugs.
To dilineate the structure of our logic clearer.

- What is a method?

A method is a property value of an object which is of the object type Function.
There are two kinds of methods:
1.) Instance methods
Built-in tasks performed by an object instance (an instance is an object that refers to another object which is inherits from)
2.) Static methods
Tasks that are called directly on an object constructor.

```javascript
Math.max(); /* static method, called directly on the Math object, not called on an instance created by the Math object */
```

- How is a method different from any other function?

It is stored in the memory data base as an object's property value.
A method belongs to an object.

- How do you remove the last element from an array?

To remove the last element from an array, you can:
1.) Use the .pop() method
2.) Change the length of the property to be 1 less than it currently is

- How do you round a number down to the nearest integer?

Using the Math.floor() method.
It returns the largest integer less than or equal to a given number.

- How do you generate a random number?

Using the Math.random() method.
Returns a pseudo-random number between 0 and 1

- How do you delete an element from an array?

Using the .splice() method
Syntax: splice(start, deleteCount[optional], item0[optional], etc...)

- How do you append an element to an array?

Using the .push() method.

- How do you break a string up into an array?

Using the .split() method.
Takes a pattern (entered as an argument) and divides this string into an ordered list of substrings
by searching for the pattern, puts these substrings into an array, and returns the array.
Return value
An array of strings, split at each point where the separator (parameter of the .split() method) occurs in the given string.

- Do string methods change the original string? How would you check if you weren't sure?

Some do, but most do not.
An example of a String method that modifies the original string in place would be: the .splice() method.
Most String methods in JavaScript do not modify the original string in place.
Instead, they return a new string with the desired changes, leaving the original string unchanged.
This behavior is in line with the concept of strings being immutable in JavaScript.
If you're not sure, you can always log the original string in place and the copy to see if the copy was a deep copy or a shallow copy (you can tell by whether changes to the copy would result in changes to the original).

- Roughly how many string methods are there according to the MDN Web docs?

Approximately 54 String methods.

- Is the return value of a function or method useful in every situation?

No, sometimes we simply want a function to perform a set of actions without returning a value
(result of an expression) to manipulate.

```javascript
const myArray = [1, 2, 3];
my.Array.pop();
console.log(myArray); // Output: [1, 2]
```

In the above example, we wouldn't need the return value of the pop() method, we simply just want
to use the method to remove the last element of our array for us.

- Roughly how many array methods are there according to the MDN Web docs?

Approximately 47 Array methods.

- What three-letter acronym should you always include in your Google search about a JavaScript method or CSS property?

MDN

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
