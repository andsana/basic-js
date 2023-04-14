const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const dnsStats = {};

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split('.').reverse(); // split the domain into its parts and reverse the order
    let dnsPart = '';

    for (let j = 0; j < domain.length; j++) {
      dnsPart += `.${domain[j]}`; // add the next DNS part to the string
      dnsStats[dnsPart] = (dnsStats[dnsPart] || 0) + 1; // add the DNS part to the stats object
    }
  }

  return dnsStats;
}


module.exports = {
  getDNSStats
};
