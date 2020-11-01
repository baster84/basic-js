// const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }
  let discard_next = -1;
  return arr.reduce((temp, item, i) => {
    switch (item) {
      case '--discard-next': discard_next = i + 1; break;
      case '--discard-prev': if (temp.length > 0 && discard_next != i - 1) temp.pop(); break;
      case '--double-next': if (arr.length > i + 1) temp.push(arr[i + 1]); break;
      case '--double-prev': if (i > 0 && discard_next != i - 1) temp.push(arr[i - 1]); break;
      default: if (discard_next != i) {temp.push(item)} else {if (discard_next > i) discard_next = -1};
    }
    return temp;
  }, []);
};
