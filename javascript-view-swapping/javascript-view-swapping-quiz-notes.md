# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?

Deepest nested element in which the event was fired.

- What is the affect of setting an element to `display: none`?

Makes it so that it does not display on the browser Window.

- What does the `element.matches()` method take as an argument and what does it return?

It takes a string containing valid CSS selectors to test the Element against as an argument.
Returns a boolean operand value referring to whether the element matches the specified selector or not.

- How can you retrieve the value of an element's attribute?

Using the .getAttribute() method

- At what steps of the solution would it be helpful to log things to the console?

Every step.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?

an event listener would need to be placed on every tab element.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?

You would have to know how many nodes there are in the nodeList and manually check each one of them (accessing them by indexing)

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
