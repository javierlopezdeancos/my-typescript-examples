import { getProperty } from './getProperty';
import { GraphType } from './Graph.type';

/**
 *
 *    (A) --> (C)
 *     |       |
 *     v       v
 *    (B)     (E)
 *     |
 *     v
 *    (D) <-- (F)
 *
 *    ----------------------------------
 *
 *    Breadth first traversal. (queue)
 *
 *    (A) --> (C)
 *     |
 *     v
 *    (B)
 *
 *     VALUES    a    a,b   a,b,c  a,b,c,d  a,b,c,d,e  a,b,c,d,e,f
 *     CURRENT   a    b     c      d        e          f
 *     QUEUE     c,b  d,c   e,d    f,e      f
 *
 *     a, b, c ...
 */

export const breadthFirstValues = (graph: GraphType, sourceNode: string): string[] => {
  const queue = [sourceNode];
  const values = [];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode) {
      values.push(currentNode);

      const neighbors = getProperty(currentNode, graph);

      if (neighbors && neighbors.length > 0) {
        for (const neighbor of neighbors) {
          queue.push(neighbor);
        }
      }
    }
  }

  return values;
};
