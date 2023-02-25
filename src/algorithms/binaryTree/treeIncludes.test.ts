import { treeIncludes } from './treeIncludes';
import { createNode } from './createNode.factory';
import type { NodeType } from './Node.type';

let a: NodeType<string>,
  b: NodeType<string>,
  c: NodeType<string>,
  d: NodeType<string>,
  e: NodeType<string>,
  f: NodeType<string>;

describe('binary tree, tree includes', () => {
  beforeEach(() => {
    // Creating nodes to our mock binary tree
    a = createNode<string>({ value: 'a' });
    b = createNode<string>({ value: 'b' });
    c = createNode<string>({ value: 'c' });
    d = createNode<string>({ value: 'd' });
    e = createNode<string>({ value: 'e' });
    f = createNode<string>({ value: 'f' });
  });

  test('should return true in target value is in the binary tree. Case 1', () => {
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

    const expectedMatch = treeIncludes(a, 'e');
    const expectedNotMatch = treeIncludes(a, 'x');

    expect(expectedMatch).toEqual(true);
    expect(expectedNotMatch).toEqual(false);
  });

  test('should return true in target value is in the binary tree. Case 2', () => {
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

    const expectedMatch = treeIncludes(a, 'd');
    const expectedNotMatch = treeIncludes(a, 'i');

    expect(expectedMatch).toEqual(true);
    expect(expectedNotMatch).toEqual(false);
  });
});
