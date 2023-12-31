# javascript-timers-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a "callback" function?

A function that is entered as an argument of another function.
Essentially, a block of code to be run inside of its outer function when called on by its outer function.

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?

Using the setTimeout() global function

- How can you set up a function to be called repeatedly without using a loop?

Using the setInterval() global function

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?

0, a.k.a, execute immediately

- What do `setTimeout()` and `setInterval()` return?

the timeoutID : a positive integer value which identifies the timer created by the call to setTimeout() | setInterval().
This can be passed to clearTimeout() | clearInterval() to cancel the timeout.
It is guaranteed that a timeoutID value will never be reused by a subsequent call to setTimeout() or setInterval() on the same object (a window or a worker). However, different objects use separate pools of IDs.

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
