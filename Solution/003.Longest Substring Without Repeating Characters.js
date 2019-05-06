/**
 * 采用回溯法
 * 当出现相同的字母时，将序号回溯至之前的相同字母的后一位，继续比较，记录长度最大值
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var charTable = {};
  var length = 0;
  var count = 0;
  for (var i = 0; i < s.length;) {
    var c = s.charAt(i);

    if (charTable[c] === undefined) {
      charTable[c] = i;
      count++;
      i++;
    } else {
      i = charTable[c] + 1;
      charTable = {};
      count = 0;
    }
    if (count > length) {
      length = count;
    }
  }
  return length;
};

/**
 * 采用滑动窗口方式
 * 滑动+扩充窗口方式
 * 首先记录子串起点，不断扩大字符串窗口直至出现与窗口内字符相同的字母
 * 从左侧缩小窗口（即将字符串起点后移），直至到达重复字符的下一位置
 * 继续扩充窗口直到窗口右侧达到字符串末尾
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
  var len = s.length;
  var res = 0;
  var i = 0, j = 0;
  var set = new Set();

  while (i < len && j < len) {
    if (!set.has(s.charAt(i))) {
      set.add(s.charAt(i++));
      res = Math.max(res, i - j);
    } else {
      set.delete(s.charAt(j++));
    }
  }

  return res;
};

/**
 * 思想和滑动窗口如出一辙，但是无需记录窗口左侧位置
 * 无需逐段减少窗口大小而直接将窗口大小缩减至指定长度
 * @param {string} s
 * @returns {number}
 */
var lengthOfLongestSubstring3 = function (s) {
  var len = s.length;
  if (len === 0) {
    return 0;
  }
  var res = 1;
  var substr = s.charAt(0);

  for (var i = 1; i < len; i++) {
    var c = s.charAt(i);
    if (substr.includes(c)) {
      substr = substr.substr(substr.indexOf(c) + 1);
    }

    substr += c;
    res = Math.max(res, substr.length);

  }

  return res;
};
