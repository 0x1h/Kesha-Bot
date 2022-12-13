/**
 * @description returns 10% chance
 * @example
 * 0.1 -> 90%
 * @example
 * 0.2 -> 80%
 * @example
 * 0.3 -> 70%
 * @example
 * 0.4 -> 60%
 * @example
 * 0.5 -> 50%
 * @example
 * 0.9 -> 10%
 */

const randomNumber = () => {
  const random = Math.random();

  if (random < 0.98) {
    return false;
  }

  return true;
};

module.exports = { randomNumber };
