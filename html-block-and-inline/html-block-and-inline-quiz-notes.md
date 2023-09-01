# html-block-and-inline-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do block-level elements affect the document flow?

A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
So block-level elements affect the document flow by having whatever element follows will do so but on the next line, not on the same horizontal line.
Two commonly used block elements are : <p> and <div>

- How do inline elements affect the document flow?

An inline element does not start on a new line.
An inline element only takes up as much width as necessary.
Therefore, inline elements appear horizontally next to each other on a webpage.

- What are the default width and height of a block-level element?

The default width of a block-level element is the entire width of the page.
The default height is equal to the height of its content.
Thereby creating a 'block'

In a block layout, boxes are laid out one after the other, verticaly, beginning at the top of a containing block. Each box's left outer edge touchtes the left edge of the containing block (by default without flex properties).
A block-level element always starts on a new line.
In horizontal writing modes, like English or Arabic, it occupies the entire shorizontal space of its parent element (container) and vertical space equzl to the height of its contents, thereby creating a 'block'

- What are the default width and height of an inline element?

The default width of an inline element will be however much horizontal the element and text content require, nothing more nothing less.
The default height would be however much vertical height the element takes on that one line.

In inline layout, a mixed stream of text, replaced elements, and other line boxes are laid out by fragmenting them into a stock of line boxes. Within each box, inline-level boxes are aligned to each other vertically or horizontally, depending on the writing mode.
Typically, they are aligned by the baselines of their text. (can be changed with CSS).

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
