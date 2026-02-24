/*
  You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf
  path represents a binary number starting with the most significant bit.

  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary,
  which is 13.
  For all leaves in the tree, consider the numbers represented by the path from the root to that
  leaf. Return the sum of these numbers.

  The test cases are generated so that the answer fits in a 32-bits integer.

  Example 1:

      1
     / \
    0   1
   / \ / \
  0  1 0  1

  Input: root = [1,0,1,0,1,0,1]
  Output: 22
  Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
  Example 2:

  Input: root = [0]
  Output: 0

  Constraints:

  The number of nodes in the tree is in the range [1, 1000].
  Node.val is 0 or 1.
*/

/*
  this problem is a simple root to leaf path problem
  we will use a dfs approach to solve this problem
*/

// SOLUTION
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function sumRootToLeaf(root: TreeNode | null): number {
  let total = 0;

  const sumNumbers = (root: TreeNode | null, curr: number) => {
    if (root == null) return;

    curr = curr * 2 + root.val;

    if (root.left === null && root.right === null) return total += curr;

    sumNumbers(root.right, curr);
    sumNumbers(root.left, curr);
  }

  sumNumbers(root, 0);

  return total;
};

// COMMENTED SOLUTION
function sumRootToLeafExplained(root: TreeNode | null): number {
  let total = 0; // this will store the total sum of all root to leaf paths

  const sumNumbers = (root: TreeNode | null, curr: number) => {
    if (root == null) return;

    // this is a little confusing but it works
    // imagine the path is 101
    // current = 0 and val = 1 so 0 * 2 + 1 = 1
    // current = 1 and val = 0 so 1 * 2 + 0 = 2
    // current = 2 and val = 1 so 2 * 2 + 1 = 5
    // for each value at right of the number you can multiply it by 2 te rest of the number
    // so 101 = 1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 5
    curr = curr * 2 + root.val;

    if (root.left === null && root.right === null) {
      return total += curr; // when the path ends, add the current value to the total
    }

    // we will go ahead and call the function for the left and right children
    sumNumbers(root.right, curr);
    sumNumbers(root.left, curr);
  }

  sumNumbers(root, 0);

  return total;
};