import { getProperty } from './getProperty';
import { buildGraphByEdges } from './buildGraphByEdges';
import { EdgeType } from './Edge.type';
import { GraphType } from './Graph.type';

/**
 * Recursive version
 */
const hasPath = (sourceNode: string, destinationNode: string, visited: Set<string>, graph: GraphType): boolean => {
  if (sourceNode === destinationNode) {
    return true;
  }

  if (visited.has(sourceNode)) {
    return false;
  }

  visited.add(sourceNode);

  const neighbors = getProperty(sourceNode, graph);

  if (neighbors && neighbors?.length > 0) {
    for (const neighbor of neighbors) {
      const neighborToDestinationPathExist = hasPath(neighbor, destinationNode, visited, graph);

      if (neighborToDestinationPathExist) {
        return true;
      }
    }
  }

  return false;
};

export const undirectedPath = (nodeA: string, nodeB: string, edges: EdgeType[]) => {
  const graph = buildGraphByEdges(edges);
  const visited = new Set<string>();

  return hasPath(nodeA, nodeB, visited, graph);
};
