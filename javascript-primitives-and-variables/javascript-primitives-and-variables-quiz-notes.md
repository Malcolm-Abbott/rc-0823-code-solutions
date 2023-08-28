# javascript-primitives-and-variables-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of variables?

To store data and provide a reference point in which you can invoke or call to access/manipulate that data when needed.
A variable is a "named storage" for data.

- How do you **declare** a variable?

initialize a variable with const or let followed by the identifier (variable name) followed by the assignment operator followed by the value which you wish to assign to the identifier (variable name).

```javascript
let variableName;
```

or

```javascript
const variableName = 'Value of variableName';
```

- How do you initialize (**assign a value to**) a variable?

```javascript
variableName = 'Value of variableName';
```

the variable named followed by the assignment operator followed by the value which you wish to assign to the variable name

- What characters are allowed in variable names?

letters, digits or the symbols $ and \_.
The first character must not be a digit.

- What does it mean to say that variable names are "case sensitive"?

It means that any capitalizations in their variable names matter.

```javascript
const myVariableName = 'just an example';
```

The (myVariableName) is different from (myvariablename), they would be two separate variables.

- What is the purpose of a string?

To store data as text.

- What is the purpose of a number?

To store data as a number (in which arithmetic can be used to manipulate such data).

- What is the purpose of a boolean?

To store values as either true or false (very helpful in conditional logic).

- What does the `=` operator mean in JavaScript?

The `=` is the assignment operator. It means that the identifier to the left of the assignment operator will receive the value of whatever is on the right side of the assignment operator.

- How do you update the value of a variable?

By typing the variable name (without repeating let) followed by the assignment operator followed by the updated value you wish to assign to the variable name.

- What is the difference between `null` and `undefined`?

Null is used to reference a special value which represents "nothing", "empty" or "value unknown"
undefined is used to reference a special value which represents "value is not assigned".
Normally, one uses null to assign an "empty" or "unknown" value to a variable, while undefined is reserved as a default initial value for unassigned things.

undefined indicates the absence of a value
null indicates the absence of an object

- Why is it a good habit to include "labels" when you log values to the browser console?

To be able to visually see what you are logging to the console in a clear and concise manner.

- Give five examples of JavaScript primitives.

1. string
2. number
3. bigint
4. boolean
5. undefined
6. null
7. symbol

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
