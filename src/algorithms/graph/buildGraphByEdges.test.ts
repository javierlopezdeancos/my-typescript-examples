import { buildGraphByEdges } from './buildGraphByEdges';
import { GraphType } from './Graph.type';
import { EdgeType } from './Edge.type';

let edges: EdgeType[];
let graph: GraphType;

describe('build graph by edges', () => {
  beforeEach(() => {
    edges = [
      ['i', 'j'],
      ['k', 'i'],
      ['m', 'k'],
      ['k', 'l'],
      ['o', 'n'],
    ];

    graph = {
      i: ['j', 'k'],
      j: ['i'],
      k: ['i', 'm', 'l'],
      l: ['k'],
      m: ['k'],
      o: ['n'],
      n: ['o'],
    };
  });

  test('should return true if exist an undirected path from source node to destination node. Caso 1', () => {
    const expected = buildGraphByEdges(edges);
    expect(expected).toEqual(graph);
  });
});
