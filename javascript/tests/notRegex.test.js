const notRegex = require("../src/notRegex.js");

describe("Detect every letter", () => {
  test("Return true when a string contains every letter", () => {
    let string = "Just a normal string.";
    let letters = ["a", "I", "u", "j"];
    let expected = true;
    let actual = notRegex.containsEveryLetter(string, letters);
    expect(actual).toEqual(expected);
  });
  test("Return false when a string contains only some letters", () => {
    let string = "Just a normal string.";
    let letters = ["y", "n", "x", "s"];
    let expected = false;
    let actual = notRegex.containsEveryLetter(string, letters);
    expect(actual).toEqual(expected);
  });
  test("Return false when a string contains no letter", () => {
    let string = "Just a normal string.";
    let letters = ["y", "z", "x", "p"];
    let expected = false;
    let actual = notRegex.containsEveryLetter(string, letters);
    expect(actual).toEqual(expected);
  });
})
