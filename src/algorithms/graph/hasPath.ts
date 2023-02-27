import { getProperty } from './getProperty';
import { GraphType } from './Graph.type';

// -------------------------------
//
// graph = {
//  f: ['g', 'i'],
//  g: ['h'],
//  h: [],
//  i: ['g', 'k'],
//  j: ['i'],
//  k: [],
// };
//
// 'f' -> 'h'
//
// CURRENT:      f     g     i     h
// QUEUE:    f   i g   h i   k h
//
// -------------------------------

/**
 * No recursive version
 */
export const hasPath = (sourceNode: string, destinationNode: string, graph: GraphType) => {
  const queue: string[] = [sourceNode];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === destinationNode) {
      return true;
    }

    if (current) {
      const neighbors = getProperty(current, graph);

      if (neighbors.length > 0) {
        for (let neighbor of neighbors) {
          queue.push(neighbor);
        }
      }
    }
  }

  return false;
};

/**
 * Recursive version
 *
export const hasPath = (sourceNode: string, destinationNode: string, graph: GraphType) => {
  if (sourceNode === destinationNode) {
    return true;
  }

  const neighbors = getProperty(sourceNode, graph);

  if (neighbors) {
    for (const neighbor of neighbors) {
      const existValidPath = hasPath(graph, neighbor, destinationNode);

      if (existValidPath) {
        return true;
      }
    }
  }

  return false;
};
 */
