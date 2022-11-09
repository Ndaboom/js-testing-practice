function stringLength(string) {
  let arrStr = string.split("");
  if(arrStr.length > 0 && arrStr.length <= 10) {
    return arrStr.length; 
  }
  throw 'The number of characters requested is not fulfilled';
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

class calculator {
  // add, subtract, divide, and multiply
  constructor(nbr1, nbr2) {
    this.nbr1 = nbr1;
    this.nbr2 = nbr2;
  }

  add () {
    return this.nbr1 + this.nbr2;
  }

  substract () {
    return this.nbr1 - this.nbr2;
  }

  multiply () {
    return this.nbr1 * this.nbr2;
  }

  divide () {
    return this.nbr1 / this.nbr2;
  }
}

function capitalizeFirtCharacter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {stringLength, reverseString, calculator, capitalizeFirtCharacter};