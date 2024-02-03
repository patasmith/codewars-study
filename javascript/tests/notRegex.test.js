const notRegex = require("../src/notRegex.js");

describe("Detect every character", () => {
  test("Return true when a string contains every character", () => {
    let string = "Just a normal string.";
    let characters = ["a", "i", "u"];
    let expected = true;
    let actual = notRegex.containsEveryCharacter(string, characters);
    expect(actual).toEqual(expected);
  });
  test("Return false when a string contains only some characters", () => {
    let string = "Just a normal string.";
    let characters = ["y", "n", "x", "s"];
    let expected = false;
    let actual = notRegex.containsEveryCharacter(string, characters);
    expect(actual).toEqual(expected);
  });
  test("Return false when a string contains no character", () => {
    let string = "Just a normal string.";
    let characters = ["y", "z", "x", "p"];
    let expected = false;
    let actual = notRegex.containsEveryCharacter(string, characters);
    expect(actual).toEqual(expected);
  });
})
