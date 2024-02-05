/**
 * Eliminates all occurrences of character regardless of case
 * @param {string} string - The string to operate on
 * @param {string} character - The character to eliminate
 * @returns {string}
 */
function eliminateLetter(string, character) {
  // g is the global flag. It is necessary to match all instances of the character in the string.
  // i is the ignore case flag. It matches both lowercase and uppercase versions of a character.
  let re = new RegExp(character, 'gi');
  return string.replace(re, "");
}

/**
 * Eliminates all occurrences of multiple characters regardless of case
 * @param {string} string - The string to operate on
 * @param {...string} characters - The characters to eliminate
 * @returns {string}
 */
function eliminateLetters(string, ...characters) {
  // Use the spread operator to catch all parameters passed to this function beyond the first.
  let re = new RegExp("[" + characters.join("") + "]", 'gi');
  return string.replace(re, "");
}

/**
 * Remove anything that isn't an alphabetic character from a string and return the result
 * @param {string} string - The string to operate on
 * @returns {string}
 */
function onlyLetters(string) {
  // [abc] is a set; matches the included characters.
  // [^abc] indicates a negated set; matches any character that is not included.
  // [a-c] is an inclusive range; matches the two characters and any between them.
  // + is a quantifier that matches 1 or more of the preceding token.
  let re = new RegExp("[^a-z]", 'gi');
  return string.replace(re, "");
}

/**
 * Return a set containing each unique letter in a string (lowercase)
 * @param {string} string - The string to operate on
 * @returns {Set.<string>}
 */
function letterSet(string) {
  let re = new RegExp("[^a-z]", "gi");
  return new Set(string.replace(re, "").toLowerCase().split(""));
}

module.exports = {
  eliminateLetter,
  eliminateLetters,
  onlyLetters,
  letterSet,
};
