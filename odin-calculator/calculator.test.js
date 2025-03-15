const { operate, simpleOperate } = require('./calculator');

test('should correctly calculate a complex expression', () => {
    const expression = ['12', '+', '7', '-', '5', '*', '3'];
    const result = operate(expression);
    expect(result).toBe(4);
  });

  test('should handle addition', () => {
    const expression = ['5', '+', '7'];
    const result = operate(expression);
    expect(result).toBe(12);
  });

  test('should handle subtraction', () => {
    const expression = ['10', '-', '3'];
    const result = operate(expression);
    expect(result).toBe(7);
  });

  test('should handle multiplication', () => {
    const expression = ['12', '*', '5'];
    const result = operate(expression);
    expect(result).toBe(60);
  });

  test('should handle division', () => {
    const expression = ['42', '/', '7'];
    const result = operate(expression);
    expect(result).toBe(6);
  });

  test('should handle floating point numbers', () => {
    const expression = ['2.4', '+', '3.3'];
    const result = operate(expression);
    expect(result).toBe(5.7);
  });