# javascript-arrays-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are arrays used for?

Storing and managing ordered datea items.

- Describe array literal notation.

Declare a variable followed by the assignment operator followed by square brackets [].

- How are arrays different from "plain" objects?

Arrays are optimized to work with ordered sets of data, where as objects store values as key-value pairs.
Array elements can be accessed by indexing.
Arrays have methods that automatically update the length property and have methods that are specially made for arrays.
The for loop is best used to iterate over an array (where as a for..in loop would be the go-to for a "plain" object)

- What number represents the first index of an array?

0

- What is the `length` property of an array?

The length property represents the number of elements inside of an array.
Essentially what the length property actually is is the result of the expression of taking the last index number in the array and incrementing it by 1.

- How do you calculate the last index of an array?

There are 2 ways:
Using bracket notation

```javascript
const myArray = ['a', 'b', 'c'];
console.log(myArray[myArray.length - 1]);
```

This is because the way length is calculated is simply adding 1 to the last index number in an array.
So by subtracting 1 from the length, we then have the value of the last index element in the array.

Using the .at() method

```javascript
const myArray = ['a', 'b', 'c'];
console.log(myArray.at(-1));
```

When using the at method, if the value is >= 0 then .at(i) to search for an element.
When using the at method, if the value is negative, then the values back step from the last element (so the last element would be -1, the second to last -2, etc.)

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
