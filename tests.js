// Test for stringLenght function
if(stringLenght) {
  try {
    stringLenght('Hello');
  } catch(e) {
    return e.message;
  }
} else {
  throw new Error('String length function failed');
}

if(reverseString) {
  reverseString('Hello');
} else {
  throw new Error('Reverse string function failed');
}

const calculator = new calculator(10,5);
// Test for the calculator class
// Add method
describe('Test for the add method', () => {
  it('returns the result of the addition', () => {
    calculator.add();
  });
});

// Substract method
describe('Test for the substract method', () => {
  it('returns the result of the substraction', () => {
    calculator.substract();
  });
});

// Multiply method
describe('Test for the multiply method', () => {
  it('returns the result of the multiplication', () => {
    calculator.multiply();
  });
});

// Divide method
describe('Test for the divide method', () => {
  it('returns the result of the division', () => {
    calculator.divide();
  });
});