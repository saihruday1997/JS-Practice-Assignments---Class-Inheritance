// declare class

// export class using module.exports

class shape {
  drawShape = function () {
    console.log("draw shape");
  };

  calculateArea = () => {
    console.log("shape calc area");
  };

  color = "blue";
}

module.exports.shape = shape;
