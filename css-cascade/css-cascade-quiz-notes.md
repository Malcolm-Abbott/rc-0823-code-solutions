# css-cascade-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the four components of "the Cascade".

1. Source order
2. Inheritance
3. Specificity
4. !important

- What does the term "source order" mean with respect to CSS?

Source order is, simply put, the order that your CSS rules are written in your stylesheet.
The styling provided for an element last in your stylesheet (as long as there aren't any specificity issues) will be the one to take effect.

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?

Through inheritance.
When no value for an inherited property has been specified on an element, the element gets the computed value of that property on its parent element. Only the root element of the document gets the initial value given in the property's summary.
To inherit a non-inherited property, you will have to use the inherit value on whichever property you wish for the element to inherit from its parent element

- List the three selector types in order of increasing specificity.

ID | CLASS | TYPE

- Why is using `!important` considered bad practice?

Can cause specificity issues, especially when working in teams with other developers.
!important essentially reverses the cascade order of stylesheets.
Note: !important is the only way to override css inline styles. Neither should be used practically speaking though.

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
