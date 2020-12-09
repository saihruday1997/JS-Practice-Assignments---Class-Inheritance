// declare class

// export class using module.exports

class Shape {
  constructor() {
    this.color = "blue";
  }

  drawShape = function () {
    console.log("draw shape");
  };

  calculateArea = () => {
    console.log("shape calc area");
  };
}

module.exports = Shape;
