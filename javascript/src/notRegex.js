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

/**
 * Given a word, capitalize the middle character only (rounding down)
 * @param {string} word - The word to operate on
 * @returns {string}
 *
 * @example
 * // returns "oDd"
 * capitalizeMiddleCharacter("odd")
 *
 * @example
 * // returns "eVen"
 * capitalizeMiddleCharacter("EveN")
 *
 * @example
 * //returns "Hi"
 * capitalizeMiddleCharacter("Hi")
 */
function capitalizeMiddleCharacter(word) {
  let middleIndex = word.length - parseInt(word.length / 2) - 1;
  let beginning = word.slice(0, middleIndex).toLowerCase();
  let end = word.slice(middleIndex + 1).toLowerCase();
  return(beginning + word[middleIndex].toUpperCase() + end);
}

/**
 * Given a string, randomly order the alphabetic characters,
 * while maintaining original placement of capitalization
 * and non-alphabetic characters
 * @param {string} string - The string to scramble
 * @returns {string}
 */
function scrambleAlpha(string) {
  let chars = string.split("");

  let indexedChars = chars.map((ch, index) => ({ch, index}));
  
  let nonAlpha = indexedChars.filter(({ ch }) =>
    { code = ch.charCodeAt();
      return !(code > 64 && code < 91) && !(code > 96 && code < 123);
    });
  
  let alpha = indexedChars.filter(({ ch }) =>
    { code = ch.charCodeAt();
      return (code > 64 && code < 91) || (code > 96 && code < 123);
    });
  
  let capsPlacement = alpha
      .filter(({ ch }) => ch === ch.toUpperCase())
      .map(({ ch, index }) => index);
  
  alpha = alpha.map(({ ch }) => ch.toLowerCase());
  
  for (let back = alpha.length - 1; back > 0; back--) {
    let front = Math.floor(Math.random() * (back + 1));
    [alpha[back], alpha[front]] = [alpha[front], alpha[back]];
  };

  nonAlpha.forEach(({ch, index}) => {
    alpha.splice(index, 0, ch);
  });
  
  capsPlacement.forEach( index => {
    alpha[index] = alpha[index].toUpperCase();
  });
  
  return alpha.join("");
}

/**
 * Given a sentence, randomly order the alphabetic characters
 * within each word, while maintaining original placement of
 * capitalization and non-alphabetic characters
 * @param {string} sentence - The sentence to scramble
 * @returns {string}
 */
function scrambleWords(sentence) {
  return sentence.split(" ").map(word => scrambleAlpha(word)).join(" ");
}
	       

module.exports = {
  containsEveryLetter,
  alphabetArray,
  nextMultipleOfThree,
  uppercaseWordsWithE,
  capitalizeMiddleCharacter,
  scrambleAlpha,
  scrambleWords
};
