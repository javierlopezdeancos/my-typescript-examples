import { createNode } from './createNode.factory';
import type { NodeType } from './Node.type';
import { getNodeValue } from './getNodeValue';

let a: NodeType<string>,
  b: NodeType<string>,
  c: NodeType<string>,
  d: NodeType<string>,
  e: NodeType<string>,
  f: NodeType<string>;

describe('linked list: find target in a list', () => {
  beforeEach(() => {
    // Creating nodes to our mock linked list
    // A -> B -> C -> D -> E -> F -> null
    f = createNode<string>({ value: 'F' });
    e = createNode<string>({ value: 'E', next: f });
    d = createNode<string>({ value: 'D', next: e });
    c = createNode<string>({ value: 'C', next: d });
    b = createNode<string>({ value: 'B', next: c });
    a = createNode<string>({ value: 'A', next: b });
  });

  test('should return the node value if node is in the correct index position into node list', () => {
    const expected = getNodeValue<string>(a, 4);
    expect(expected).toBe('E');
  });

  test('should return undefined if node is not in the correct index position into node list', () => {
    const expected = getNodeValue<string>(a, 7);
    expect(expected).toBe(undefined);
  });
});
