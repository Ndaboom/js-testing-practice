let { stringLength, reverseString, calculator, capitalizeFirtCharacter} = require('./tasks.js');
// Test for stringLenght function
describe('Practise tests for strings', () => {
  test('Return the length of string', () => {
    // Arrange
    const string = 'hello';
    // Act
    const output = stringLength(string);
    // Assert
    expect(output).toBe(5);
  });
});

// Test for stringLenght function
describe('Practice reversed string', () => {
  test('Return the reversed string', () => {
    // Arrange
    const string = 'hello';
    // Act
    const output = reverseString(string);
    // Assert
    expect(output).toBe('olleh');
  });
});

// Test for the calculator class
// Add method
describe('Test for the add method', () => {
  it('returns the result of the addition', () => {
    // Arrange
    const calc = new calculator(10,5);
    //Act
    const output = calc.add();
    // Assert
    expect(output).toBe(15);
  });
});

// Substract method
describe('Test for the substract method', () => {
  it('returns the result of the substraction', () => {
    // Arrange
    const calc = new calculator(10,5);
    // Act
    const output = calc.substract();
    // Assert
    expect(output).toBe(5);
  });
});

// Multiply method
describe('Test for the multiply method', () => {
  it('returns the result of the multiplication', () => {
    // Arrange
    const calc = new calculator(10,5);
    // Act
    const output = calc.multiply();
    // Assert
    expect(output).toBe(50);
  });
});

// Divide method
describe('Test for the divide method', () => {
  it('returns the result of the division', () => {
    // Arrange
    const calc = new calculator(10,5);
    // Act
    const output = calc.divide();
    // Assert
    expect(output).toBe(2);
  });
});

// Test for first character capitalization function
describe('Practice first caracter capitalization', () => {
  test('Return the string with the first letter capitalized', () => {
    // Arrange
    const string = 'hello';
    // Act
    const output = capitalizeFirtCharacter(string);
    // Assert
    expect(output).toBe('Hello');
  });
});