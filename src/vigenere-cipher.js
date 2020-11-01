const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) { 
    this.direct = direct;
    this.start = 'A'.charCodeAt();
  }

  encrypt(message, key) {
    if (message === undefined || message === '' || 
      key === undefined || key === ''){
      throw new Error('Error!');
    }
	  let ii = 0;
    let encrypted = message.toUpperCase().split('').reduce((arr, item) => {
      const charCode = item.charCodeAt() - this.start;
      if (charCode < 0 || charCode > 25) {
        arr.push(item);
      } else {
		    const keyCode = key[ii % key.length].toUpperCase().charCodeAt() - this.start;
        arr.push(String.fromCharCode(((charCode + keyCode) % 26) + this.start));
		    ii++;
      }
      return arr;
    }, []);
    return (this.direct) ? encrypted.join('') : encrypted.reverse().join('');
  } 
  decrypt(message, key) {
    if (message === undefined || message === '' || 
      key === undefined || key === ''){
      throw new Error('Error!');
    }
	  let ii = 0;
    let decrypted = message.toUpperCase().split('').reduce((arr, item) => {
      const charCode = item.charCodeAt() - this.start;
      if (charCode < 0 || charCode > 25) {
        arr.push(item);
      } else {
		    const keyCode = key[ii % key.length].toUpperCase().charCodeAt() - this.start;
        arr.push(String.fromCharCode(((charCode - keyCode + 26) % 26) + this.start));
		    ii++;
      }
      return arr;
    }, []);
    return (this.direct) ? decrypted.join('') : decrypted.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
