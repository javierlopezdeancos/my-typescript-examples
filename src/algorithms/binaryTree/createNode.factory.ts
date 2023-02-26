import type { NodeType } from './Node.type';

export const createNode = <NODE_VALUE>({ value, left, right }: NodeType<NODE_VALUE>): NodeType<NODE_VALUE> => ({
  value,
  right,
  left,
});
