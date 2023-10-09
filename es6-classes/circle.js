/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius ** 2, Math.PI * radius * 2);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()}, Radius: ${this.radius}`;
  }
}

const iCircle = new Circle(5);
console.log('iCircle.describe():', iCircle.describe());
