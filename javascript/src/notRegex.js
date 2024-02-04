/**
 * Detects whether a string contains all letters in an array regardless of case
 * @param {string} string - The string to operate on
 * @param {array} letters - The array of letters to detect
 * @returns {boolean}
 */
function containsEveryLetter(string, letters) {
  // There doesn't seem to be a regex that detects if every character in a range is present
  return letters.every((letter) => string.toLowerCase().includes(letter.toLowerCase()));
}

module.exports = {
  containsEveryLetter,
};
