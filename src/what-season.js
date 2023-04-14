const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

const getSeason = (date) => {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date.valueOf())) {
    throw new Error('Invalid date!');
  }
  
  // Trick to catch an enemy scout
  if (Object.prototype.toString.call(date) !== '[object Date]' || Object.keys(date).length > 0) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  switch (true) {
    case month >= 11 || month <= 1:
      return 'winter';
    case month >= 8:
      return 'autumn';
    case month >= 5:
      return 'summer';
    default:
      return 'spring';
  }
};

module.exports = {
  getSeason
};
