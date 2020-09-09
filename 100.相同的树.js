/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // 先判断边界
  if (q === null && q === null) {
    return true;
  }
  if (q === null || p === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  // 递归判断
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// p,q代表两棵树
var isSameTree = function(p, q) {
  // 先判断边界
  if (q === null && p === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(q.right, p.right);
};
