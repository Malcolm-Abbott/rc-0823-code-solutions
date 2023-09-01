# html-links-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What HTML tag is used to link to another website?

The anchor tag <a>

- What is an absolute URL?

A Uniform Resource Locator which points to a location defined by its absolute location on the web,
including protocol and domain name.
For example,
if an index.html page is uploaded to a directory called projects that sits inside the root of a web server, and the website's domain is https://www.example.com, the page would be available at:
https://www.example.com/projects/index.html (or even just https://www.example.com/projects/, as msot web servers just look for a landing page such as index.html to load if it isn't specified in the URL.)

An absolute URL will always point to the same location, no matter where it's used.

- What is a relative URL?

A Uniform Resource Locator pointing to a location that is relative to the file you are linking from.
For example,
If we wanted to link from our example file at https://www.example.com/projects/index.html to a PDF file in the same directory, the URL would just be the filename - project-brief.pdf - no extra information needed.
If the PDF was available in a subdirectly inside projects called pdfs, the relative link would be pdfs/project-brief.pdf (the equivalent absolute URL would be https://www.example.com/projects/pdfs/project-brief.pdf)
A relative URL will point to different places depeneding on the actual location of the file you refer from.

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
