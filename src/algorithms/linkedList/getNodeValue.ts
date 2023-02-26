import { NodeType } from './Node.type';

// A -> B -> C -> D -> E -> F -> null
export const getNodeValue = <V>(headNode: NodeType<V>, nodeIndex: number): V | undefined => {
  let value: V | undefined = undefined;
  let index: number = 0;
  let current: NodeType<V> | undefined = headNode;

  while (current?.next) {
    if (index === nodeIndex) {
      return (value = current.value);
    }

    if (current?.next) {
      index++;
      current = current.next;
    }
  }

  return value;
};
