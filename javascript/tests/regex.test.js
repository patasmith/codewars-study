const regex = require("../src/regex.js");

describe("Eliminate a letter", () => {
  test("Return a string with all instances of a character removed", () => {
    let string = "Oh, look at this cool string.";
    let character = "o";
    let expected = "h, lk at this cl string.";
    let actual = regex.eliminateLetter(string, character);
    expect(actual).toEqual(expected);
  });
  test("Return the string unchanged if the character is not present", () => {
    let string = "This string will be unchanged.";
    let character = "z";
    let expected = string;
    let actual = regex.eliminateLetter(string, character);
    expect(actual).toEqual(expected);
  });
});

describe("Eliminate multiple letters", () => {
  test("Return a string with all instances of multiple characters removed", () => {
    let string = "This is my cool string.";
    let characters = ["x", "o", "c", "l", "z"];
    let expected = "This is my  string.";
    let actual = regex.eliminateLetters(string, ...characters);
    expect(actual).toEqual(expected);
  });
  test("Return the string unchanged if characters are not present", () => {
    let string = "This is an unchanging string.";
    let characters = ["x", "y", "e"];
    let expected = string;
    let actual = regex.eliminateLetters(string, ...characters);
    expect(actual).toEqual(expected);
  });
});

describe("Return only letters", () => {
  test("Return a string with all non-alphabetic letters removed", () => {
    let string = "A (string) with 'spaces' and <brackets>.";
    let expected = "Astringwithspacesandbrackets";
    let actual = regex.onlyLetters(string);
    expect(actual).toEqual(expected);
  });
});
