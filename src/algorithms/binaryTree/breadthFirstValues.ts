import { NodeType } from './Node.type';

/**
       a
      / \
     b   c
    / \   \
   d   e   f

  -> [a, b, c, d, e, f]
**/

/**
 *
 * No recursive version
 */
export const breadthFirstValues = <NODE_VALUE>(rootNode: NodeType<NODE_VALUE>): NODE_VALUE[] => {
  if (rootNode === null) {
    return [];
  }

  const values: NODE_VALUE[] = [];
  const queue: NodeType<NODE_VALUE>[] = [rootNode];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current?.value) {
      values.push(current.value);
    }

    if (current?.left) {
      queue.push(current.left);
    }

    if (current?.right) {
      queue.push(current.right);
    }
  }

  return values;
};
