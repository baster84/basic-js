// const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)){
      let depth = 1;
      let max = 0;
      for (const item of arr){
        const output = this.calculateDepth(item);
        max = max > output ? max : output;
      }
      return depth + max;
    }
    return 0;
  }
};