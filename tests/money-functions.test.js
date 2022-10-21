const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test('Given the amount 0, it returns "$0.00"', () => {
    const result = formatCurrency(0);

    expect(result).toBe("$0.00");
  });
  test('Given the amount 1, it returns "$1.00"', () => {
    const result = formatCurrency(1);

    expect(result).toBe("$1.00");
  });
  test('Given the amount 1.5, it returns "$1.50"', () => {
    const result = formatCurrency(1.5);

    expect(result).toBe("$1.50");
  });
  test('Given the amount 0.01, it returns "$0.01"', () => {
    const result = formatCurrency(0.01);

    expect(result).toBe("$0.01");
  });
  test('Given the amount 527.6789, it returns "$527.68".', () => {
    const result = formatCurrency(527.6789);

    expect(result).toBe("$527.68");
  });
  test('Given the amount -1, it returns "-$1.00".', () => {
    const result = formatCurrency(-1);

    expect(result).toBe("-$1.00");
  });
  test('Given the amount -618, it returns "-$618.00"', () => {
    const result = formatCurrency(-618);

    expect(result).toBe("-$618.00");
  });
  test('Given the amount 1028.9, it returns "$1028.90', () => {
    const result = formatCurrency(1028.9);

    expect(result).toBe("$1028.90");
  });
});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", () => {
    const result = getCoins(32);

    expect(result).toEqual({ quarters: 1, dimes: 0, nickels: 1, pennies: 2 });
  });
  test("10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.", () => {
    const result = getCoins(10);

    expect(result).toEqual({ quarters: 0, dimes: 1, nickels: 0, pennies: 0 });
  });
  test("27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.", () => {
    const result = getCoins(27);

    expect(result).toEqual({ quarters: 1, dimes: 0, nickels: 0, pennies: 2 });
  });
  test("68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.", () => {
    const result = getCoins(68);

    expect(result).toEqual({ quarters: 2, dimes: 1, nickels: 1, pennies: 3 });
  });
});
