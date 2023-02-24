import { breadthFirstValues } from './breadthFirstValue';
import type { NodeInterface } from './Node.interface';

class Node<V> implements NodeInterface<V> {
  value: V;

  left: NodeInterface<V> | undefined;

  right: NodeInterface<V> | undefined;

  constructor(value: V) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

let a: Node<string>, b: Node<string>, c: Node<string>, d: Node<string>, e: Node<string>, f: Node<string>;

describe('binary tree', () => {
  beforeEach(() => {
    // Creating nodes to our mock binary tree
    a = new Node<string>('a');
    b = new Node<string>('b');
    c = new Node<string>('c');
    d = new Node<string>('d');
    e = new Node<string>('e');
    f = new Node<string>('f');
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

    const expected = breadthFirstValues(a);
    expect(expected).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
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

    const expected = breadthFirstValues(a);
    expect(expected).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});
