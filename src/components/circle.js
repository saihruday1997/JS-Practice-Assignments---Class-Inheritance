// import using require

const { default: shape } = require("./shape");

// declare class

// export class using module.exports

export default class circle extends shape {
  calculateArea = () => {
    console.log("circle calc area");
  };
}
