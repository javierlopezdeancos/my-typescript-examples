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
 *    (D) --> (F)
 *
 *    ----------------------------------
 *
 *    Depth first traversal. (stack)
 *
 *    (A)
 *     |
 *     v
 *    (B)
 *     |
 *     v
 *    (D)
 *
 *     a, b, d, f, c, e
 *
 *                | (b) | (d) | (f) | (c) | (e) |
 *           -----|-----|-----|-----|-----|-----|
 *    STACK   (a) |  c  |  c  |  c  |  e  |     |
 *
 */

/**
 *
 * No recursive pattern
 *
export const depthFirstValues = (graph: Record<string, string[]>, sourceNode: string): string[] => {
  const values = [] as string[];
  const stack = [sourceNode];

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (currentNode) {
      values.push(currentNode);

      const neighbors = getProperty(currentNode, graph);

      if (neighbors && neighbors.length > 0) {
        for (const neighbor of neighbors.reverse()) {
          stack.push(neighbor);
        }
      }
    }
  }

  return values;
};
*/

/**
 *
 * Recursive pattern
 *
 */
export const depthFirstValues = (graph: GraphType, sourceNode: string): string[] => {
  const values = [sourceNode];
  const neighbors = getProperty(sourceNode, graph);

  if (neighbors && neighbors.length > 0) {
    for (const neighbor of neighbors) {
      const v = depthFirstValues(graph, neighbor);
      values.push(...v);
    }
  }

  return values;
};
