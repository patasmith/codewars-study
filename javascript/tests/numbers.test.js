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
