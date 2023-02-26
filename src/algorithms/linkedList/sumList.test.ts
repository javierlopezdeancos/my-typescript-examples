import { createNode } from './createNode.factory';
import type { NodeType } from './Node.type';
import { sumList } from './sumList';

let a: NodeType<number>,
  b: NodeType<number>,
  c: NodeType<number>,
  d: NodeType<number>,
  e: NodeType<number>,
  f: NodeType<number>;

describe('linked list: sum list', () => {
  beforeEach(() => {
    // Creating nodes to our mock linked list
    // 2 -> 8 -> 3 -> 7 -> null  (20)
    d = createNode<number>({ value: 7 });
    c = createNode<number>({ value: 3, next: d });
    b = createNode<number>({ value: 8, next: c });
    a = createNode<number>({ value: 2, next: b });
  });

  test('should return linked list values sum', () => {
    const expected = sumList(a);
    expect(expected).toEqual(20);
  });
});
