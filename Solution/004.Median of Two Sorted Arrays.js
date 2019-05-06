/**
 *
  There are two sorted arrays nums1 and nums2 of size m and n respectively.

  Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

  You may assume nums1 and nums2 cannot be both empty.

  Example 1:

  nums1 = [1, 3]
  nums2 = [2]

  The median is 2.0

  思路1：
  先计算中间值出现的位置，由于长度可能是奇数或者偶数，所以要计算中间值可能有一个或者两个位置

  枚举两个数组的值，更小的加入到新的数组中，当数组的长度达到中间值的位置时，返回中间值即可

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;
  var len = len1 + len2;
  var middle = len % 2 === 0 ? [len / 2 - 1, len / 2] : [(len - 1) / 2];

  var i = 0, j = 0;
  var tmp = [];
  while (true) {
    if (nums1[i] < nums2[j]) {
      tmp.push(nums1[i++]);
    } else if (nums2[j] < nums1[i]) {
      tmp.push(nums2[j++])
    } else if (nums2[j] === nums1[i]) {
      tmp.push(nums1[i++], nums2[j++]);
    } else {
      tmp.push(i > len1 - 1 ? nums2[j++] : nums1[i++]);
    }

    if (tmp.length - 1 === Math.max(...middle) || (i > len1 - 1 && j > len2 - 1)) {
      break;
    }
  }

  return middle.length > 1 ? (tmp[middle[0]] + tmp[middle[1]]) / 2 : tmp[middle[0]];
};
