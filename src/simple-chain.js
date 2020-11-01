const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || 
    Math.trunc(position) !== position || 
    position < 0 || this.chain.length < position){
      this.chain = [];
      throw new Error('Error!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.reduce((str, item) => {
      return str.length > 0 ? str + `~~( ${item} )` : `( ${item} )`;
    }, '');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
