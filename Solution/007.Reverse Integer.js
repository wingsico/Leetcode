/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var res = 0
  var pos = x > 0;
  res = (Math.abs(x) + '').split('').reverse().join('');
  res = pos ? res : `-${res}`
  res = Number(res);

  if (res > Math.pow(2, 31) - 1 || res < - Math.pow(2, 31)) {
    res = 0;
  }

  return res;
};
