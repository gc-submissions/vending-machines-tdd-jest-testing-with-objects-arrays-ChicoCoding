const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1 ", () => {
    const result = calculateChange(5, 6);
    expect(result).toBe(1);
  });
  test("Given total 12.30 and payment 13.03, it returns 0.73.", () => {
    const result = calculateChange(12.3, 13.03);
    expect(result).toBeCloseTo(0.73);
  });
  test("Given total 12 and payment 11, it returns .", () => {
    const result = calculateChange(12, 11);
    expect(result).toBeCloseTo(-1);
  });
});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, it returns true", () => {
    const result = isSufficientPayment(5, 6);
    expect(result).toBe(true);
  });
  test("Given total 10 and payment 7, it returns false", () => {
    const result = isSufficientPayment(10, 7);
    expect(result).toBe(false);
  });
  test("Given total 3 and payment 3, it returns true", () => {
    const result = isSufficientPayment(3, 3);
    expect(result).toBe(true);
  });
  test("Given total 4 and payment 13, it returns true", () => {
    const result = isSufficientPayment(4, 13);
    expect(result).toBe(true);
  });
});

describe("calculateTotal", () => {
  test("Given an itemsArray of one item with price 4.99, it returns 4.99.", () => {
    const result = calculateTotal([{ name: "Example", price: 4.99 }]);
    expect(result).toBe(4.99);
  });

  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52.", () => {
    const result = calculateTotal([
      { name: "Example1", price: 3.5 },
      { name: "Example2", price: 12.99 },
      { name: "Example3", price: 0.03 },
    ]);
    expect(result).toBeCloseTo(16.52);
  });

  test("Given an empty itemsArray, it returns 0.", () => {
    const result = calculateTotal([]);
    expect(result).toBeCloseTo(0);
  });

  test("Add one more test case with items that you choose.", () => {
    const result = calculateTotal([
      { name: "Example1", price: 1.1 },
      { name: "Example2", price: 2.2 },
      { name: "Example3", price: 3.3 },
      { name: "Example4", price: 4.4 },
      { name: "Example5", price: 5.5 },
      { name: "Example6", price: 6.6 },
      { name: "Example7", price: 7.7 },
      { name: "Example8", price: 8.8 },
      { name: "Example9", price: 9.9 },
    ]);
    expect(result).toBeCloseTo(49.5);
  });
});

describe("addItem", () => {
  test('Call addItem with an empty itemsArray, name "Beans" and price 3.', () => {
    const result = addItem([], "Beans", 3);
    expect(result).toEqual([{ name: "Beans", price: 3 }]);
  });
  test('Create an itemsArray with one item in it: { name: "Beans", price: 3 }. Call addItem with itemsArray, name "Sugar" and price 2', () => {
    const result = addItem([{ name: "Beans", price: 3 }], "Sugar", 2);
    expect(result).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test("Test starting with an array of three items", () => {
    const result = addItem(
      [
        { name: "Beans", price: 3 },
        { name: "Sugar", price: 2 },
        { name: "Beets", price: 5 },
      ],
      "Gummy Bears",
      4
    );
    expect(result).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Beets", price: 5 },
      { name: "Gummy Bears", price: 4 },
    ]);
  });
});

describe("removeItem", () => {
  test("Remove the first element from an array of three items.", () => {
    const result = removeItem(
      [
        { name: "Beans", price: 3 },
        { name: "Sugar", price: 2 },
        { name: "Beets", price: 5 },
      ],
      0
    );

    expect(result).toEqual([
      { name: "Sugar", price: 2 },
      { name: "Beets", price: 5 },
    ]);
  });
  test("Remove the last element from an array of three items.", () => {
    const result = removeItem(
      [
        { name: "Beans", price: 3 },
        { name: "Sugar", price: 2 },
        { name: "Beets", price: 5 },
      ],
      2
    );

    expect(result).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test("Remove the middle element from an array of three items.", () => {
    const result = removeItem(
      [
        { name: "Beans", price: 3 },
        { name: "Sugar", price: 2 },
        { name: "Beets", price: 5 },
      ],
      1
    );

    expect(result).toEqual([
      { name: "Beans", price: 3 },
      { name: "Beets", price: 5 },
    ]);
  });
  test("Remove the only element from an array of one item.", () => {
    const result = removeItem([{ name: "Beans", price: 3 }], 0);

    expect(result).toEqual([]);
  });
});
