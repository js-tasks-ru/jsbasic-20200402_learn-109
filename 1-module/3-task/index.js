/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */

function ucFirst(str) {
  str = (str[0]) ? str[0].toUpperCase() + str.slice(1) : str;

  return str;
}
