import type { GraphType } from './Graph.type';
import type { NodeType } from '../binaryTree/Node.type';
import { getProperty } from './getProperty';

const exploreNodeInGraph = (node: string, graph: GraphType) => {
  const neighbors = getProperty(node, graph);

  for (const neighbor of neighbors) {
  }
};

export const connectedComponentsCount = (graph: GraphType) => {
  for (const node in graph) {
    if (Object.prototype.hasOwnProperty.call(graph, node)) {
      exploreNodeInGraph(node, graph);
    }
  }
};
