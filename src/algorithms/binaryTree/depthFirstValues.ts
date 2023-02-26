import type { NodeType } from './Node.type';

/**
 *
 * No recursive version
 *
export const depthFirstValues = <V>(rootNode: NodeType<V>): V[] => {
  if (rootNode === null) {
    return [];
  }

  const values: V[] = [];
  const stack: NodeType<V>[] = [rootNode];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current) {
      values.push(current.value);

      if (current?.right) {
        stack.push(current.right);
      }

      if (current?.left) {
        stack.push(current.left);
      }
    }
  }

  return values;
};
*/

/**
 *
 * Recursive version
 */
export const depthFirstValues = <V>(rootNode: NodeType<V>): V[] => {
  if (rootNode === null) {
    return [];
  }

  let values = [rootNode.value];

  let leftValues: V[];
  let rightValues: V[];

  if (rootNode?.left) {
    leftValues = depthFirstValues(rootNode.left);
    values = [...values, ...leftValues];
  }

  if (rootNode?.right) {
    rightValues = depthFirstValues(rootNode.right);
    values = [...values, ...rightValues];
  }

  return values;
};
