import { createNode } from './createNode.factory';
import type { NodeType } from './Node.type';
import { reverseList } from './reverseList';

let a: NodeType<string>,
  b: NodeType<string>,
  c: NodeType<string>,
  d: NodeType<string>,
  e: NodeType<string>,
  f: NodeType<string>;

describe('linked list: reverse list', () => {
  beforeEach(() => {
    // Creating nodes to our mock linked list
    // A -> B -> C -> D -> E -> F -> undefined
    f = createNode<string>({ value: 'F' });
    e = createNode<string>({ value: 'E', next: f });
    d = createNode<string>({ value: 'D', next: e });
    c = createNode<string>({ value: 'C', next: d });
    b = createNode<string>({ value: 'B', next: c });
    a = createNode<string>({ value: 'A', next: b });
  });

  test('should return the linked list with all pointers reversed', () => {
    // Creating nodes to our expected mock reverse linked list
    // undefined <- AE <- BE <- CE <- DE <- EE <- FE

    const ae = createNode<string>({ value: 'A' });
    const be = createNode<string>({ value: 'B', next: ae });
    const ce = createNode<string>({ value: 'C', next: be });
    const de = createNode<string>({ value: 'D', next: ce });
    const ee = createNode<string>({ value: 'E', next: de });
    const fe = createNode<string>({ value: 'F', next: ee });

    const expected = reverseList<string>(a);
    expect(JSON.stringify(expected)).toBe(JSON.stringify(fe));
  });
});
