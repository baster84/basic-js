// const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (const arr of matrix){
    for (const item of arr){
      if (item === '^^'){
        count++;
      }
    }
  }
  return count;
};
