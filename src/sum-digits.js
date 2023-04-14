const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  let sum = 0;
  
  // преобразуем число в строку, чтобы легче было работать с цифрами
  let str = n.toString();
  
  // пока число состоит из более чем одной цифры, складываем все цифры
  // затем присваиваем полученную сумму переменной n и повторяем операцию
  while (str.length > 1) {
    sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i]);
    }
    str = sum.toString();
  }
  
  return sum;
}


module.exports = {
  getSumOfDigits
};
