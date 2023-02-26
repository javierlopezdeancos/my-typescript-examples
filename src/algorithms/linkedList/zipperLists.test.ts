import { createNode } from './createNode.factory';
import type { NodeType } from './Node.type';
import { zipperLists } from './zipperLists';

let a: NodeType<string>,
  b: NodeType<string>,
  c: NodeType<string>,
  d: NodeType<string>,
  q: NodeType<string>,
  r: NodeType<string>;

describe('linked list: reverse list', () => {
  beforeEach(() => {
    // Creating nodes to our mock linked list 1
    // A -> B -> C -> D -> undefined
    d = createNode<string>({ value: 'D' });
    c = createNode<string>({ value: 'C', next: d });
    b = createNode<string>({ value: 'B', next: c });
    a = createNode<string>({ value: 'A', next: b });

    // Creating nodes to our mock linked list 2
    // Q -> R -> undefined
    r = createNode<string>({ value: 'R' });
    q = createNode<string>({ value: 'Q', next: r });
  });

  test('should return the linked list with all pointers reversed', () => {
    // Expected mock zipped list
    // A -> Q -> B -> R -> C -> D -> undefined

    const de = createNode<string>({ value: 'D' });
    const ce = createNode<string>({ value: 'C', next: de });
    const re = createNode<string>({ value: 'R', next: ce });
    const be = createNode<string>({ value: 'B', next: re });
    const qe = createNode<string>({ value: 'Q', next: be });
    const ae = createNode<string>({ value: 'A', next: qe });

    const expected = zipperLists<string>(a, q);
    expect(JSON.stringify(expected)).toBe(JSON.stringify(ae));
  });
});
