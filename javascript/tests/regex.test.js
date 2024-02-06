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
  test("Return a string of only alphabetic characters unchanged", () => {
    let string = "thisSTRINGisALPHABETIC";
    let expected = string;
    let actual = regex.onlyLetters(string);
    expect(actual).toEqual(expected);
  });
});

describe("Return the unique letters of a string", () => {
  test("Return each unique letter in a string", () => {
    let string = "AaaBbbCdExyZ";
    let expected = new Set("abcdexyz".split(""));
    let actual = regex.letterSet(string);
    expect(actual).toEqual(expected);
  });
  test("Ignore spaces and punctuation", () => {
    let string = " +%L@98 () 3ol-";
    let expected = new Set(["l","o"]);
    let actual = regex.letterSet(string);
    expect(actual).toEqual(expected);
  });
});

describe("Remove dashes and underscores from a string", () => {
  test("Remove dashes and underscores", () => {
    let string = "-no-d#shes-_!or%_under-scores_";
    let expected = "nod#shes!or%underscores";
    let actual = regex.removeDashesAndUnderscores(string);
    expect(actual).toEqual(expected);
  });
});

describe("Double a specific character in a string", () => {
  test("Double a letter", () => {
    let string = "Snakes use lessons and lesssons to see how to hiss and hisss";
    let expected = "Ssnakess usse lessonss and lesssonss to ssee how to hiss and hisss";
    let actual = regex.doubleCharacterIfSingle(string, "s");
    expect(actual).toEqual(expected);
  });
});
