/**
 * Detects whether a string contains all letters in an array regardless of case
 * @param {string} string - The string to operate on
 * @param {Array.<string>} letters - The array of letters to detect
 * @returns {boolean}
 */
function containsEveryLetter(string, letters) {
  // There doesn't seem to be a regex that detects if every character in a range is present
  return letters.every((letter) => string.toLowerCase().includes(letter.toLowerCase()));
}

/**
 * Return an array containing every letter of the alphabet (lowercase)
 * @returns {Array.<string>}  
 */
function alphabetArray() {
  let base = "a".charCodeAt();
  let baseArray = Array.from(Array(26).keys());
  return baseArray.map(x => String.fromCharCode(x + base));
}

/**
 * Return a set containing each unique letter in a string (lowercase)
 * @param {string} string - The string to operate on
 * @returns {Set.<string>}
 */
function letterSet(string) {
  let re = new RegExp("[^a-z]+", "gi");
  return new Set(string.replace(re, "").toLowerCase().split(""));
}

module.exports = {
  containsEveryLetter,
  alphabetArray,
  letterSet,
};
