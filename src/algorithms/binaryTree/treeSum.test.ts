import { treeSum } from './treeSum';
import { createNode } from './createNode.factory';
import type { NodeType } from './Node.type';

let a: NodeType<number>,
  b: NodeType<number>,
  c: NodeType<number>,
  d: NodeType<number>,
  e: NodeType<number>,
  f: NodeType<number>;

describe('binary tree: tree sum', () => {
  beforeEach(() => {
    // Creating nodes to our mock binary tree
    a = createNode<number>({ value: 3 });
    b = createNode<number>({ value: 11 });
    c = createNode<number>({ value: 4 });
    d = createNode<number>({ value: 4 });
    e = createNode<number>({ value: 2 });
    f = createNode<number>({ value: 1 });
  });

  test('should return all values across the binary tree in the correct order. Case 1', () => {
    // Relation nodes to our mock binary tree
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    /*
      Our mock binary tree structure
              3
             / \
            11  4
           / \   \
          4   2   1
    */

    const expected = treeSum(a);
    expect(expected).toBe(25);
  });
});
