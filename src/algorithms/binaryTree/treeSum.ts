import { NodeType } from './Node.type';

export const treeSum = (rootNode: NodeType<number>): number => {
  if (rootNode === null) {
    return 0;
  }

  let leftSum, rightSum;

  if (rootNode?.left) {
    leftSum = treeSum(rootNode.left) || 0;
  }

  if (rootNode?.right) {
    rightSum = treeSum(rootNode.right) || 0;
  }

  if (!leftSum && !rightSum) {
    return rootNode.value;
  }

  if (leftSum && rightSum) {
    return rootNode.value + leftSum + rightSum;
  }

  if (leftSum) {
    return rootNode.value + leftSum;
  }

  if (rightSum) {
    return rootNode.value + rightSum;
  }

  return 0;
};
