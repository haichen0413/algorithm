/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // 比root大 或者比root小
  if (p.val > root && q.val > root) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (p.val < root && q.val < root) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    // 一个在左，一个在右，说明找到了
    return root;
  }
};

var lowestCommonAncestor1 = function(root, p, q) {
  while (root) {
    if (p.val > root && q.val > root) {
      root = root.right;
    } else if (p.val < root && q.val < root) {
      root = root.left;
    } else {
      return root;
    }
  }
};
