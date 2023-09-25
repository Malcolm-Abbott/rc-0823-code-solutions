# javascript-and-json-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is JSON?

A text-based data format following JavaScript object syntax.
It can be used independently from JavaScript, an d many programming environments feature the ability to read (parse) and generate JSON.
Purely a string with a specified data format - it contains only properties, no methods.
Property names (keys) must be in double quotes.

- What are serialization and deserialization?

Serialization is the process of turning an object in memory into a stream of bytes.
Deserialization is the reverse process: turning a stream of bytes into an object in memory.

- Why are serialization and deserialization useful?

Serialization allows you to transport data from its memory data base.
Deserialization allows you to unpack all of the transported data (done through serialization) to then store/manipulate the data as you wish.

- How do you serialize a data structure into a JSON string using JavaScript?

JSON.stringify()

- How do you deserialize a JSON string into a data structure using JavaScript?

JSON.parse()

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
