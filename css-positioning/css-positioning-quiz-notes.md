# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?

The default value for the position property of HTML elements is:
static (position: static;)

- How does setting `position: relative` on an element affect document flow?

It does not, the element remains in the normal document flow.

- How does setting `position: relative` on an element affect where it appears on the page?

Just adding position: relative to an element does not effect where it appears on the page.
But when properties top | right | bottom | left are given a value, it offsets the element according to the values input in the top/right/bottom/left properties relative to where the element is in the document flow.

- How does setting `position: absolute` on an element affect document flow?

It removes the element from the document flow.

- How does setting `position: absolute` on an element affect where it appears on the page?

Makes it appear relative to its nearest positioned ancestor, if there are any.
If there are not any, it makes it appear relative to the initial containing block (which also contains the <html> element).

- How do you constrain an absolutely positioned element to a containing block?

By nesting it inside of a positioned element.

- What are the four box offset properties?

top
right
bottom
left

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
