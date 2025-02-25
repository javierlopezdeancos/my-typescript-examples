import { undirectedPath } from './undirectedPath';
import type { EdgeType } from './Edge.type';

let edges: EdgeType[];

describe('graph: has path', () => {
  beforeEach(() => {
    edges = [
      ['i', 'j'],
      ['k', 'i'],
      ['m', 'k'],
      ['k', 'l'],
      ['o', 'n'],
    ];

    /**
    graph = {
      i: ['j', 'k'],
      j: ['i'],
      k: ['i', 'm', 'l'],
      l: ['k'],
      m: ['k'],
      o: ['n'],
      n: ['o'],
    };
    **/
  });
  test('should', () => {
    expect(true).toBe(true);
  });

  test('should return true if exist an undirected path from source node to destination node. Caso 1', () => {
    const expected = undirectedPath('j', 'm', edges);
    expect(expected).toBe(true);
  });

  test('should return true if exist an undirected path from source node to destination node. Caso 2', () => {
    const expected = undirectedPath('m', 'j', edges);
    expect(expected).toBe(true);
  });

  test('should return true if exist an undirected path from source node to destination node. Caso 2', () => {
    const expected = undirectedPath('l', 'j', edges);
    expect(expected).toBe(true);
  });

  test('should return false if exist an undirected path from source node to destination node. Caso 2', () => {
    const expected = undirectedPath('k', 'o', edges);
    expect(expected).toBe(false);
  });

  test('should return false if exist an undirected path from source node to destination node. Caso 2', () => {
    const expected = undirectedPath('i', 'o', edges);
    expect(expected).toBe(false);
  });
});
