# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

In order to check our code to make sure our code is working as intended.

To track our logic and what our code is doing in accordance with that logic so that we can see whether the logic needs to be changed and how our code needs to interact to produce that logic.

- What is a "model"?

Essentially they are host environments.
A host environment provides its own objects and functions in addition to the language core. Web browsers give a means to control web pages. Node.js provides server-side features, and so on.

- Which "document" is being referred to in the phrase Document Object Model?

The main "entry point" to the page.
We can change or create anything on the page using it.
Essentially it is a host environment referencing what will appear in the browser window.
The document object that represents the whole document is, formally, a DOM node as well.

- What is the word "object" referring to in the phrase Document Object Model?

Referring to the Document, which is a JavaScript Object.

- What is a DOM Tree?

A tree of nodes representing HTML objects.

- Give two examples of `document` methods that retrieve a single element from the DOM.

document.querySelector()
document.getElementById()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

document.querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?

To be able to access and manipulate the DOM elements

- What `console` method allows you to inspect the properties of a DOM element object?

console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

So that the HTML and CSS do not have to wait to render until the JavaScript file finishes rendering. The JavaScript file is heavier and takes longer to load, best to let the HTML & CSS load while the JS is still loading.

- What does `document.querySelector()` take as its argument and what does it return?

Any CSS selector. Can be a tag name, class name, id name, etc.
Returns the first element that matches the argument provided.

- What does `document.querySelectorAll()` take as its argument and what does it return?

Any CSS selector.
Returns a static array of elements that match the argument entered.

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
