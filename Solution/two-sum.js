/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
var twoSum = function (nums = [], target) {
  const len = nums.length;
  const res = {};
  let tmp = 0;
  for (let i = 0; i < len; i++) {
    tmp = target - nums[i];
    if (res[tmp] !== undefined && res[tmp] !== i) {
      return [res[tmp], i];
    }
    res[nums[i]] = i;
  }
}

/**
 * 减少变量，减少运行时间
 */

var twoSum2 = function (nums = [], target) {
  const res = {};
  for (var i = 0; i < nums.length; i++) {
    if (target - nums[i] in res) {
      return [res[target - nums[i]], i]
    }
    res[nums[i]] = i;
  }
}
