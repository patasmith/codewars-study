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

describe("Return the alphabet as an array", () => {
  test("Return an array containing every letter of the alphabet", () => {
    let expected = ["a","b","c","d","e","f","g","h","i",
		    "j","k","l","m","n","o","p","q","r",
		    "s","t","u","v","w","x","y","z"];
    let actual = notRegex.alphabetArray();
    expect(actual).toEqual(expected);
  });
});

describe("Return the unique letters of a string", () => {
  test("Return each unique letter in a string", () => {
    let string = "AaaBbbCdExyZ";
    let expected = new Set("abcdexyz".split(""));
    let actual = notRegex.letterSet(string);
    expect(actual).toEqual(expected);
  });
  test("Ignore spaces and punctuation", () => {
    let string = " +%L@98 () 3ol-";
    let expected = new Set(["l","o"]);
    let actual = notRegex.letterSet(string);
    expect(actual).toEqual(expected);
  });
});
