# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Give 6 examples of comparison operators.

  1.) greater than (>)
  2.) less than(<)
  3.) greater than or equal to (>=)
  4.) less than or equal to (<=)
  5.) strictly equal to (===)
  6.) not strictly equal to (!==)

- What data type do comparison expressions evaluate to?

Boolean

- What is the purpose of an `if` statement?

To perform an action or set of actions based upon the provided conditional logic.

- Is `else` required in order to use an `if` statement?

No, else is only used when you desire to perform a different action or set of actions based upon the first condition in the conditional logic not being met.

If you only wanted to perform an action or set of actions based upon meeting a certain criteria defined by the conditional logic of the if statement, (that means no alternative action if the criteria isn't met), you would have no need for an else statement.

- Describe the syntax (structure) of an `if` statement.

  1.) if
  2.) conditional expression (wrapped in parentheses)
  3.) {} code block
  4.) code to run inside of the code block if the result of the expression is a truthy operand
  5.) if else (optional)
  6.) else (optional)

- What are the three logical operators?

  1.) AND ( && ) : shortcircuits when first falsy operand is found, if none are found, returns the last truthy operand in its original state (not type converted to Boolean)
  2.) OR ( || ) : shortcircuits when first truthy operand is found, if none are found, returns the last operand in its original state (not type converted to Boolean)
  3.) NOT ( ! ) : result = !value . Accepts a single argument an does the following 1. Converts the operand to boolean type: true/false. 2. Returns the inverse value. 1. alert ( !true ); // false 2. alert( !false); // true 3. A double NOT ( !! ) is sometimes used for converting a value to boolean type 1. Essentially the same as Boolean() 4. The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

- How do you compare two different expressions in the same condition?

Using the question mark / ternary operator ( ? ) 1. Called ternary because the operator has three operands. 1. syntax: let result = condition ? value1 : value2; 2. The condition is evaluated: if it's truthy then value1 is returned, otherwise - value2. 3. For example: 1. let accessAllowed = (ace > 18) ? true : false;

- What is the purpose of a `switch` statement?

to run different blocks of code based on different criteria that are met or not met in the conditional logic

- Is a `default` clause required in order to use a `switch` statement?

No, the same logic of whether the else statement should needs to be included in an if statement applies here.

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
