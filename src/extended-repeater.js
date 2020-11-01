//const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const addition = options !== null && ("addition" in options) ? 
    repeater(options.addition, { 
      repeatTimes: ("additionRepeatTimes" in options) ? options.additionRepeatTimes : 0, 
      separator: ("additionSeparator" in options) ? options.additionSeparator : '|'
    }) : '';

  const repeat = String(str) + addition;
  let result = repeat;
  if (options !== null && ("repeatTimes" in options)){
    for (let i=1; i < options.repeatTimes; i++){
      result += (("separator" in options) ? options.separator : '+') + repeat;
    }
  }
  return result;
};
  