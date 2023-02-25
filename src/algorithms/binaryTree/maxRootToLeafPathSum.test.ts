import { maxRootToLeafPathSum } from './maxRootToLeafPathSum';
import { createNode } from './createNode.factory';
import type { NodeType } from './Node.type';

let a: NodeType<number>,
  b: NodeType<number>,
  c: NodeType<number>,
  d: NodeType<number>,
  e: NodeType<number>,
  f: NodeType<number>;

describe('binary tree: max root to leaf path sum', () => {
  beforeEach(() => {
    // Creating nodes to our mock binary tree
    a = createNode<number>({ value: 5 });
    b = createNode<number>({ value: 11 });
    c = createNode<number>({ value: 3 });
    d = createNode<number>({ value: 4 });
    e = createNode<number>({ value: -2 });
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
           5
          / \
        11   3
       /  \   \
      4  - 2   1
    */

    const expected = maxRootToLeafPathSum(a);
    expect(expected).toBe(20);
  });
});
