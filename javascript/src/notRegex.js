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
 * Given a number, return the next highest number that is a multiple of 3
 * @param {number} n - The number to operate on
 * @returns {number}
 *
 * @example
 * // returns 6
 * nextMultipleOfThree(3);
 *
 * @example
 * // returns 12
 * nextMultipleOfThree(10);
 */
function nextMultipleOfThree(n) {
  return n + (3 - (n % 3))
}

/**
 * Given a string, convert all words containing the letter 'e' to uppercase
 * @param {string} string - The string to operate on
 * @returns {string}
 *
 * @example
 * // returns "EVEN an EASY SENTENCE to try"
 * uppercaseWordsWithE("Even an easy sentence to try")
 */
function uppercaseWordsWithE(string) {
  return string
    .split(" ")
    .map(x => x.includes("e") || x.includes("E")
	 ? x.toUpperCase()
	 : x)
    .join(" ");
}

module.exports = {
  containsEveryLetter,
  alphabetArray,
  nextMultipleOfThree,
  uppercaseWordsWithE,
};
