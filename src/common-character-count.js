const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

function getCommonCharacterCount(s1, s2) {
  let commonCount = 0;
  const s1CharCounts = getCharCounts(s1);
  const s2CharCounts = getCharCounts(s2);
  
  for (const char in s1CharCounts) {
    if (char in s2CharCounts) {
      commonCount += Math.min(s1CharCounts[char], s2CharCounts[char]);
    }
  }
  
  return commonCount;
}

function getCharCounts(str) {
  const charCounts = {};
  
  for (const char of str) {
    if (char in charCounts) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }
  
  return charCounts;
}




module.exports = {
  getCommonCharacterCount
};
