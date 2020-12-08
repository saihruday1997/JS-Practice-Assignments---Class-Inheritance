// import using require

const shape = require("./shape.js");

// declare class

// export class using module.exports

class circle extends shape {
  calculateArea = () => {
    console.log("circle calc area");
  };
}

module.exports.circle = circle;
