# es6-classes-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are JavaScript classes?

Blueprints for creating objects.
Classes encapsulate data and methods to manipulate that data.

- When would you want to use a class?

When you want to create objects that store their own internal data and expose a lot of behavior.

- How do you declare a class?

With a class declaration.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

- How do you inherit from another class?

By using the extends keyword.

```javascript
class Employee extends Person {
  constructor(name, age, employeeId) {
    super(name, age);
    this.employeeId = employeeId;
  }
}
```

- Why would you want to inherit from another class?

To be able to inherit their functionality and add additional functionality on top of that for the class instance which inherits from the parent Object.

- How do you add methods and properties to a class?

By adding them as functions within the class declaration code block;

```javascript
class Employee extends Person {
  constructor(name, age, employeeId) {
    super(name, age);
    this.employeeId = employeeId;
  }

  showId() {
    console.log(`My employee ID is ${this.employeeId});
  }
}
```

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
