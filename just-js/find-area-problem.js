// find area using class and inheritance
class Shape {
  constructor(_name) {
    let name = _name;
    this.getName = () => {
      return name;
    };
  }
}

class Rectangle extends Shape {
  constructor(_name, _side1, _side2) {
    super(_name);
    this.side1 = _side1;
    this.side2 = _side2;
  }

  getArea() {
    return this.side1 * this.side2;
  }
  isSquare() {
    return this.side1 === this.side2;
  }
}

let obj = new Rectangle("Rectangle", 3, 4);
// obj.name shouldn't get printed since it is encapsulated
console.log(obj.name, obj.side1, obj.side2);
console.log("obj getName method:", obj.getName());
console.log("obj isSquare method:", obj.isSquare());
console.log("obj getArea method:", obj.getArea());
