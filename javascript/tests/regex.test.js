const regex = require("../src/regex.js");

describe("Eliminate a letter", () => {
  test("Remove all instances of a character from a string, regardless of case", () => {
    let string = "This is my cool string.";
    let character = "o";
    let expected = "This is my cl string.";
    let actual = regex.eliminateLetter(string, character);
    expect(actual).toEqual(expected);
  });
});

describe("Eliminate multiple letters", () => {
  test("Remove all instances of multiple characters from a string, regardless of case", () => {
    let string = "This is my cool string.";
    let characters = ["o", "c", "l"];
    let expected = "This is my  string.";
    let actual = regex.eliminateLetters(string, ...characters);
    expect(actual).toEqual(expected);
  });
});
