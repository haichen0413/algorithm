/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let cur = head;
  let pre = null;

  while (cur !== null) {
    // 获取下一个的值，下一个的值就是当前遍历元素的下一个指针
    let next = cur.next;
    // 当前的下一个就是前一个pre
    cur.next = pre;
    // 前一个就是当前的元素
    pre = cur;
    // 往下遍历
    cur = next;

    // 简单方法 ---> 结构
    // [cur.next, pre, cur] = [pre, cur, cur.next];
  }
  return pre;
};
