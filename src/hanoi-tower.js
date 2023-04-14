const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

function calculateHanoi(diskNumber, turnsSpeed) {
  let turns = Math.pow(2, diskNumber) - 1; // formula for minimum number of turns
  let seconds = Math.floor(turns / (turnsSpeed / 3600)); // formula for minimum number of seconds
  return { turns, seconds };
}


module.exports = {
  calculateHanoi
};
