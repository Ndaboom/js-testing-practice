function stringLenght(string) {
  if(string.length === 1 && string.length <= 10) {
    return string.length; 
  }
  throw new Error('The number of characters requested is not fulfilled');
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