# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?

parenthesis, parameter inside of parenthesis, arrow, code block | statement

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

The return value is implicit and does not need to be declared with a return statement.
The function will then directly return the expression.
This means that there can only be one line of code.
If you need multiple lines of cose, you must then use a _concise body stynax_

- When using _concise body syntax_, how do you return an object literal?

By wrapping the object in parenthesis.
This is because JavaScript will parse what's inside of the curly braces as a sequence of statements.

- In the expression
  ```js
  foo(() => 42);
  ```
  - Identify the arrow function

() => 42

- How many arguments does the arrow function take?

none. 0.

- What value does it return?

the integer 42

- How many arguments are passed to the function `foo`?

1.  - What type of argument is passed to the function `foo`?

an arrow function.

- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function

(y) => {
console.log(`4y = ${4 * y}`);
}

    - How many arguments does the arrow function take?

1.  - What value does it return?

none. 0.

    - How many arguments are passed to the function `bar`?

1.  - What type of argument is passed to the function `bar`?

an arrow function.

    - When does the arrow function's code get executed?

Synchronously (unless specified as async)

- How does the value of `this` differ between standard functions and arrow functions?

The this keyword will refer to the lexical scope, not the function itself.
An arrow function captures the this value of the enclosing context instaed of creating its own this context.

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
