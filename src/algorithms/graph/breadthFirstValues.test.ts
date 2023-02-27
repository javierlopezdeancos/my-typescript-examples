import { breadthFirstValues } from './breadthFirstValues';
import { GraphType } from './Graph.type';

let graph: GraphType;

describe('graph: depth first values', () => {
  beforeEach(() => {
    graph = {
      a: ['b', 'c'],
      b: ['d'],
      c: ['e'],
      d: ['f'],
      e: [],
      f: [],
    };
  });

  test('should return all graph node values traversing in depth mode', () => {
    const expected = breadthFirstValues(graph, 'a');
    expect(expected).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });
});
