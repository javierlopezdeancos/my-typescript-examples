import { depthFirstValues } from './depthFirstValues';
import { createNode } from './createNode.factory';
import type { NodeType } from './Node.type';

let a: NodeType<string>,
  b: NodeType<string>,
  c: NodeType<string>,
  d: NodeType<string>,
  e: NodeType<string>,
  f: NodeType<string>;

describe('binary tree', () => {
  beforeEach(() => {
    // Creating nodes to our mock binary tree
    a = createNode<string>({ value: 'a' });
    b = createNode<string>({ value: 'b' });
    c = createNode<string>({ value: 'c' });
    d = createNode<string>({ value: 'd' });
    e = createNode<string>({ value: 'e' });
    f = createNode<string>({ value: 'f' });
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
              a
             / \
            b   c
           / \   \
          d   e   f
    */

    const expected = depthFirstValues(a);
    expect(expected).toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
  });

  test('should return all values across the binary tree in the correct order. Case 2', () => {
    // Relation nodes to our mock binary tree
    a.right = b;
    b.left = c;
    c.right = d;
    d.right = e;

    /*
      Our mock binary tree structure
              a
               \
                b
               /
              c
               \
                d
                 \
                  e
    */

    const expected = depthFirstValues(a);
    expect(expected).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});
