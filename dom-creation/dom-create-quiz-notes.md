# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?

No, it simply creates the element.
To insert the element, you will have to append or prepend it to another element after it's created.

- How do you add an element as a child to another element?

Using the .append() or .prepend() method.
Using the .appendChild() method.

Other insertion methods worth noting:
.before() - inserts nodes/strings before node
.after() - inserts nodes/strings after node
.replaceWith() - raplces node with the given nodes or strings

Node removal
.remove() method removes the specified node

Cloning nodes: cloneNode
.cloneNode(true) creates a "deep" clone of the element - with all attributes and subelements.
.cloneNode(false) clone is made without child elements

- What do you pass as the arguments to the `element.setAttribute()` method?

A string representing the name of the attribute to set
A string representing the value of the attribute to set

- What steps do you need to take in order to insert a new element into the page?

Create an element.
Append/prepend to existing element.

- What is the `textContent` property of an element object for?

To represent the text content of the node and its descendants.

- Name two ways to set the `class` attribute of a DOM element.

element.className = 'example-name';
element.setAttribute('class', 'example-name');

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

Automatically generate HTML elements without having to manually write it.
Have the generation of HTML elements function based off of conditional logic.
Makes your page much more interactive.

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
