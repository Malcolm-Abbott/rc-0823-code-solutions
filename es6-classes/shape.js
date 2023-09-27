/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `The area is ${this.area} and the perimeter is ${this.perimeter}`;
  }
}

const iShape = new Shape(10 * 10, 10 * 4);
console.log('iShape.describe()', iShape.describe());
