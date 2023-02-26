import { NodeType } from './Node.type';

/**
 *
 * No recursive version
 *
export const treeMinValue = (rootNode: NodeType<number>): number => {
  const stack: NodeType<number>[] = [rootNode];
  let smallest: number = Infinity;

  while (stack.length > 0) {
    const current = stack.pop();

    if (current?.value) {
      if (current?.value < smallest) {
        smallest = current?.value;
      }
    }

    if (current?.left) {
      stack.push(current.left);
    }

    if (current?.right) {
      stack.push(current.right);
    }
  }

  return smallest;
};
*/

/**
 *
 * Recursive version
 *
 */
export const treeMinValue = (rootNode: NodeType<number>): number => {
  if (rootNode === null) {
    return Infinity;
  }

  let minLeftValue: number = Infinity;
  let minRightValue: number = Infinity;

  if (rootNode?.left) {
    minLeftValue = treeMinValue(rootNode.left);
  }

  if (rootNode?.right) {
    minRightValue = treeMinValue(rootNode.right);
  }

  if (minLeftValue < minRightValue) {
    return Math.min(rootNode.value, minLeftValue);
  }

  if (minLeftValue > minRightValue) {
    return Math.min(rootNode.value, minRightValue);
  }

  return Math.min(rootNode.value, minLeftValue);
};
