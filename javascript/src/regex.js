// Eliminates all occurences of character regardless of case
function eliminateLetter(string, character) {
  // g is the global flag. It is necessary to match all instances of the character in the string.
  // i is the ignore case flag. It matches both lowercase and uppercase versions of a character.
  let re = new RegExp(character, 'gi');
  return string.replace(re, "");
}

function eliminateLetters(string, ...characters) {
  // Use the spread operator to catch all parameters passed to this function beyond the first.
  let re = new RegExp("[" + characters.join("") + "]", 'gi');
  return string.replace(re, "");
}

module.exports = { eliminateLetter, eliminateLetters };
