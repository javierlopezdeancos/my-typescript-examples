import type { NodeType } from './Node.type';

export const createNode = <V>({ value, left, right }: NodeType<V>): NodeType<V> => ({
  value,
  right,
  left,
});
