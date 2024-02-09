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

describe("Return the next highest multiple of 3", () => {
  test("If given 3, return 6", () => {
    let expected = 6;
    let actual = notRegex.nextMultipleOfThree(3);
    expect(actual).toEqual(expected);
  });
  test("If given 10, return 12", () => {
    let expected = 12;
    let actual = notRegex.nextMultipleOfThree(10);
    expect(actual).toEqual(expected);
  });
    test("If given 200, return 201", () => {
    let expected = 201;
    let actual = notRegex.nextMultipleOfThree(200);
    expect(actual).toEqual(expected);
  });
});

describe("Convert all words with letter 'e' in a sentence to uppercase", () => {
  test("Convert words no matter their position or case of letter 'e'", () => {
    let expected = "EVEN an EASY SENTENCE to try."
    let actual = notRegex.uppercaseWordsWithE("Even an easy sentence to try.")
    expect(actual).toEqual(expected);
  })
});
