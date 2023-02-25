import { NodeType } from './Node.type';

export const treeIncludes = <V>(rootNode: NodeType<V>, target: V): boolean => {
  if (rootNode === null) {
    return false;
  }

  if (rootNode.value === target) {
    return true;
  }

  let isIncludeAtLeft = false;
  let isIncludeAtRight = false;

  if (rootNode?.left) {
    isIncludeAtLeft = treeIncludes(rootNode.left, target);
  }

  if (rootNode?.right) {
    isIncludeAtRight = treeIncludes(rootNode.right, target);
  }

  return isIncludeAtLeft || isIncludeAtRight;
};
