/**
 * Detects whether a string contains all characters in an array
 * @param {string} string - The string to operate on
 * @param {array} characters - The array of characters to detect
 * @returns {boolean}
 */
function containsEveryCharacter(string, characters) {
  // There doesn't seem to be a regex that detects if every character in a range is present
  for (let i = 0; i < characters.length; i++) {
    if (!string.includes(characters[i])) {
      return false;
    }
  }
  return true;
}

module.exports = {
  containsEveryCharacter,
};
