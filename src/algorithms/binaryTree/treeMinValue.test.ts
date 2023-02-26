import { treeMinValue } from './treeMinValue';
import { createNode } from './createNode.factory';
import type { NodeType } from './Node.type';

let a: NodeType<number>,
  b: NodeType<number>,
  c: NodeType<number>,
  d: NodeType<number>,
  e: NodeType<number>,
  f: NodeType<number>;

describe('binary tree: tree min value', () => {
  beforeEach(() => {
    // Creating nodes to our mock binary tree
    a = createNode<number>({ value: 3 });
    b = createNode<number>({ value: 11 });
    c = createNode<number>({ value: 4 });
    d = createNode<number>({ value: 4 });
    e = createNode<number>({ value: 2 });
    f = createNode<number>({ value: 1 });
  });

  test('should return the min nodes value. Case 1', () => {
    // Relation nodes to our mock binary tree
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    /*
      Our mock binary tree structure
              3       | current  | 3 | 11 | 4 | 2 | 4 | 1 |
             / \      |----------|------------------------|
            11  4     |          |   |    | 4 |   |   |   |
           / \   \    |          |   | 11 | 2 | 2 | 4 |   |
          4   2   1   | stack    | 3 |  4 | 4 | 4 | 1 | 1 |
    */

    const expected = treeMinValue(a);
    expect(expected).toBe(1);
  });

  test('should return the min nodes value. Case 2', () => {
    // Relation nodes to our mock binary tree
    a.right = b;
    b.left = c;
    c.right = d;
    d.right = e;

    /*
      Our mock binary tree structure
              3
               \
                11
               /
              4
               \
                4
                 \
                  2
    */

    const expected = treeMinValue(a);
    expect(expected).toBe(2);
  });
});
