// const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === 'undefined' || 
    typeof sampleActivity !== 'string'){
    return false;
  }
  const N = Number(sampleActivity);
  if (typeof N !== 'number' || isNaN(N) || N === 0 || N < 0 || N > MODERN_ACTIVITY){
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / N) * HALF_LIFE_PERIOD / Math.LN2);
};
