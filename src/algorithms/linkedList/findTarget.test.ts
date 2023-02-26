import { createNode } from './createNode.factory';
import type { NodeType } from './Node.type';
import { findTarget } from './findTarget';

let a: NodeType<number>,
  b: NodeType<number>,
  c: NodeType<number>,
  d: NodeType<number>,
  e: NodeType<number>,
  f: NodeType<number>;

describe('linked list: find target in a list', () => {
  beforeEach(() => {
    // Creating nodes to our mock linked list
    // 2 -> 8 -> 3 -> 7 -> null  (20)
    d = createNode<number>({ value: 7 });
    c = createNode<number>({ value: 3, next: d });
    b = createNode<number>({ value: 8, next: c });
    a = createNode<number>({ value: 2, next: b });
  });

  test('should return true if target is in the node list', () => {
    const expected = findTarget(a, 3);
    expect(expected).toEqual(true);
  });

  test('should return false if target is not in the node list', () => {
    const expected = findTarget(a, 12);
    expect(expected).toEqual(false);
  });
});
