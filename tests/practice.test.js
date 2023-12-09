let isEven = (number) => number % 2 === 0;

describe('Tests', () => {
  test('isEven function returns true for even number', () => {
    expect(isEven(2)).toBe(true);
  });

  test('isEven function returns false for odd number', () => {
    expect(isEven(3)).toBe(false);
  });
});


