# html-relative-links-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you indicate the relative link to a parent directory?

Use two dots
Ex.) If i'm accessing from projects/index.html and want to access another directory within the parent directory
../otherFile/index.html

- How do you indicate the relative link to a child directory?

This is done by specifying the directory's name, then a forward slash, then the name of the file.
Ex.) projects/index.html
From the directory i'm currently in, go to the projects directory and access the index.html file
The / just indicates that what's prepended is a directory that we can access within our currently directory

- How do you indicate the relative link to a grand parent directory?

Using two dots, slash, two dots
../../index.html
This can be chained

- How do you indicate the relative link to the same directory?

with the file name
Ex. => href="index.html"

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
