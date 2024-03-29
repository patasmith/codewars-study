const numbers = require("../src/numbers.js");

describe("Return the next highest multiple of 3", () => {
  test("If given 3, return 6", () => {
    let expected = 6;
    let actual = numbers.nextMultipleOfThree(3);
    expect(actual).toEqual(expected);
  });
  test("If given 10, return 12", () => {
    let expected = 12;
    let actual = numbers.nextMultipleOfThree(10);
    expect(actual).toEqual(expected);
  });
    test("If given 200, return 201", () => {
    let expected = 201;
    let actual = numbers.nextMultipleOfThree(200);
    expect(actual).toEqual(expected);
  });
});

describe("Given two objects, find shared keys for values within a specified range", () => {
  test("No shared keys", () => {
    let expected = [];
    let o1 = {'a': 100, 'b': 200};
    let o2 = {'c': 300, 'd': 400};
    let actual = numbers.compareValuesWithinRange(o1, o2, 100);
    expect(actual).toEqual(expected);
  });
  test("Shared keys but no shared values", () => {
    let expected = [];
    let o1 = {'a': 1, 'b': 2};
    let o2 = {'a': 3, 'b': 4};
    let actual = numbers.compareValuesWithinRange(o1, o2, 1);
    expect(actual).toEqual(expected);
  });
  test("Shared keys", () => {
    let expected = ['a', 'c'];
    let o1 = {'a': 50, 'b': 100, 'c': 25};
    let o2 = {'a': 75, 'b': 200, 'c': 50};
    let actual = numbers.compareValuesWithinRange(o1, o2, 25);
    expect(actual).toEqual(expected);
  });
});
