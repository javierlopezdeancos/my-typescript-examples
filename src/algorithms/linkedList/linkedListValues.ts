import { NodeType } from './Node.type';

// A -> B -> C -> D -> null

export const linkedListValues = <V>(headNode: NodeType<V>): V[] => {
  let current: NodeType<V> | undefined;
  let values: V[] = [];

  current = headNode;

  while (current) {
    values.push(current.value);
    current = current.next;
  }

  return values;
};

const fillValues = <V>(headNode: NodeType<V>, values: V[]): void => {
  if (!headNode) {
    return;
  }

  values.push(headNode.value);

  if (headNode?.next) {
    fillValues(headNode.next, values);
  }
};

export const linkedListValuesRecursiveVersion = <V>(headNode: NodeType<V>): V[] => {
  let values: V[] = [];
  fillValues(headNode, values);
  return values;
};
