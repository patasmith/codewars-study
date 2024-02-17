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
  return n + (3 - (n % 3));
}

/**
 * Given two objects containing numeric values, return identical keys that
 * contain values within a specified range
 * @param {Object.<number>} o1 - The first collection of numeric values to compare
 * @param {Object} o2 - The second collection of numeric values to compare
 * @param {number} range - Indicates how far above/below to compare values
 * @returns {Array.<string>}
 *
 * @example
 * // returns ['a', 'c']
 * compareValuesWithinRange({a: 100, b: 150, c: 200},
 *                          {a: 150, b: 250, c: 250},
 *                          50)
 */
function compareValuesWithinRange(o1, o2, range) {
  return {};
}

module.exports = {
  nextMultipleOfThree,
};
