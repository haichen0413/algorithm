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
// var detectCycle = function(head) {
//   let cache = new Set();

//   while (head) {
//     if (cache.has(head)) {
//       return head;
//     } else {
//       cache.add(head);
//     }
//     head = head.next;
//   }
//   return null;
// };
var hasCycle = function(head) {
  let fast = head;
  let slow = head;
  let start = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      while (slow && start) {
        if (slow === start) {
          return slow;
        }
        slow = slow.next;
        start = start.next;
      }
    }
  }
  return false;
};
