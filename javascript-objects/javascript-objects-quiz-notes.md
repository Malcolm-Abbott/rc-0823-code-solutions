# javascript-objects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are objects used for?

For storing data in the form of key-value pairs.

- What are object properties?

A key-value pair inside of a JavaScript object. Consists of a property name (key) and property value (value). These are associated together, so the value is assigned to the key.

- Describe object literal notation.

First, declare a variable and second assign it a value of empty curly braces `{}`

- How do you remove a property from an object?

Using the delete operator

```javascript
const student = {
  fullName = 'Malcolm Abbott',
  age = 33,
  location = 'Anaheim, California',
};
delete student.location;
console.log('value of student:', student);
/*
OUTPUT: value of student: { fullname = 'Malcolm Abbott', age = 33 }
*/
```

- What are the two ways to get or update the value of a property?

The 2 ways are:
Bracket Notation
Dot Notation

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
