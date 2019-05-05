/**
 *
 * You are given two non-empty linked lists representing two
 * non-negative integers. The digits are stored in reverse order and
 * each of their nodes contain a single digit. Add the two numbers and
 * return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero,
 * except the number 0 itself.
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var flag = 0;
  var tmp = 0;
  var start = l1;
  while (true) {
    tmp = l1.val + l2.val + flag;
    flag = 0;
    if (tmp >= 10) {
      flag = 1;
      l1.val = tmp - 10;
    } else {
      l1.val = tmp;
    }

    if (!l1.next && !l2.next && flag === 1) {
      l1.next = new ListNode(1);
      break;
    }
    if (!l1.next && !l2.next && flag === 0) {
      break;
    }
    if (!l1.next && l2.next) {
      l1.next = new ListNode(0);
    }

    if (l1.next && !l2.next) {
      l2.next = new ListNode(0);
    }


    l1 = l1.next;
    l2 = l2.next;
  }
  return start;
};


/**
 * 递归的方式解决
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {number} residual
 */
var addTwoNumbers2 = function (l1, l2, residual = 0) {

  if ((l1 === null) && (l2 === null) && (residual === 0)) return null;

  const L1val = l1 ? l1.val : 0
  const L2val = l2 ? l2.val : 0
  const L1next = l1 ? l1.next : null
  const L2next = l2 ? l2.next : null

  let node = new ListNode();
  const sum = L1val + L2val + residual;

  node.val = sum % 10
  node.next = addTwoNumbers2(L1next, L2next, (sum - sum % 10) / 10)
  return node
};

/**
 * !test 和 test === null ，后者用的时间比前者少
 */
