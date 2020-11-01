// const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = members.reduce((arr, item) => {
    return typeof item === 'string' ? arr.concat(item.trim()[0].toUpperCase()) : arr;
  }, []).sort().join('');

  return result.length === 0 ? false : result;
};
