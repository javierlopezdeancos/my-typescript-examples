import type { NodeType } from './Node.type';

export const createNode = <V>({ value, next }: NodeType<V>): NodeType<V> => ({
  value,
  next,
});
