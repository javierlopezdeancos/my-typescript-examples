import { NodeType } from './Node.type';

/**
       a
      / \
     b   c
    / \   \
   d   e   f

  -> [a, b, c, d, e, f]
**/

export const breadthFirstValues = <V>(rootNode: NodeType<V>): V[] => {
  if (rootNode === null) {
    return [];
  }

  const values: V[] = [];
  const queue: NodeType<V>[] = [rootNode];

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
