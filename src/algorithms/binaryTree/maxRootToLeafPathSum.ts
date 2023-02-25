import type { NodeType } from './Node.type';

/*
  Our mock binary tree structure
                     (20)
       5               5
      / \            /
    11   3         11
   /  \    \      /
  4   2     1    4
*/

export const maxRootToLeafPathSum = (rootNode: NodeType<number>): number => {
  if (rootNode === null) {
    return -Infinity;
  }

  const isLeaf = !rootNode.left && !rootNode?.right;

  if (isLeaf) {
    return rootNode.value;
  }

  let leftMaxPathSum: number = 0;
  let rightMaxPathSum: number = 0;

  if (rootNode?.left) {
    leftMaxPathSum = maxRootToLeafPathSum(rootNode.left);
  }

  if (rootNode?.right) {
    rightMaxPathSum = maxRootToLeafPathSum(rootNode.right);
  }

  return rootNode.value + Math.max(leftMaxPathSum, rightMaxPathSum);
};
