
var convert = function (s, numRows) {
  if (numRows <= 1 || s.length <= 1) return s;
  var x, y, step, arr = [], len = s.length;
  var start, offset, index;
  var blockSize = numRows + numRows - 2;
  for (y = 0; y < numRows; y++) {
    step = y === 0 || y === numRows - 1 ? 2 : 1;
    for (x = 0; 1; x += step) {
      start = Math.floor(x / 2) * blockSize;
      offset = (x % 2) ? (2 * numRows - 2 - y) : y;
      index = start + offset;
      if (index >= len) break;
      arr.push(s[index]);
    }
  }
  return arr.join('');
};
