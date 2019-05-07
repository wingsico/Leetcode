/**
 *
  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

  Example 1:

  Input: "babad"
  Output: "bab"
  Note: "aba" is also a valid answer.


  思路1：（低效率，高空间占用）
  遍历字符串，并且遍历时存储到遍历位置的子串
  若在子串中查找到与当时遍历的字符相同的字符时
  判断是否为回文字符串
  若是且长度比之前的长，则记录字符串

 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var sub = "", temp = "";
  var res = "";
  var i = 0;
  var index = -1;
  while (i < s.length) {
    index = sub.indexOf(s.charAt(i), index + 1)
    if (index !== -1) {
      temp = sub.substr(index) + s.charAt(i);
      if (temp.split('').reverse().join('') === temp) {
        if (temp.length > res.length) {
          res = temp;
        }
        index = index - 2;
      } else {
        continue;
      }
    }
    sub += s.charAt(i++);
  }

  return res || s[0] || "";
};


/**
 * 方法二，动态编程
 *
 * 为了改进蛮力解决方案，我们首先观察如何在验证回文时避免不必要的重新计算。考虑一下“ababa”的情况。如果我们已经知道“bab”是一个回文，很明显“ababa”必须是回文，因为两个左右两边的字母是相同的。
 */

var isP = function (s = '', i = 0, j = 0) {
  var _s = s.slice(i, j + 1);
  return _s.split('').reverse().join('') === _s;
}

var longestPalindrome2 = function (s) {
  var res = s[0] || "";
  var i = 0, j = 0;
  while (i < s.length && j < s.length) {
    if (isP(s, i, j)) {
      res = j - i > res.length - 1 ? s.slice(i, j + 1) : res;
      if (i > 0) {
        i--
      }
      j++;
    } else {
      i++;
    }
  }

  return res;
};
