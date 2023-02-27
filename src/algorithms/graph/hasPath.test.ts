import { hasPath } from './hasPath';
import { GraphType } from './Graph.type';

let graph: GraphType;

describe('graph: has path', () => {
  beforeEach(() => {
    graph = {
      f: ['g', 'i'],
      g: ['h'],
      h: [],
      i: ['g', 'k'],
      j: ['i'],
      k: [],
    };
  });

  test('should return true if is a path posible to move on from source node to destination node', () => {
    const expected = hasPath('f', 'h', graph);
    expect(expected).toBe(true);
  });

  test('should return true if is not a path posible to move on from source node to destination node', () => {
    const expected = hasPath('f', 'j', graph);
    expect(expected).toBe(false);
  });
});
