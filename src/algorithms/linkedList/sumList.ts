import { NodeType } from './Node.type';

// 2 -> 8 -> 3 -> 7 -> null  (20)
export const sumList = (headNode: NodeType<number>): number => {
  let sum: number = 0;

  if (headNode?.next) {
    sum = sumList(headNode.next);
  }

  return (sum = sum + headNode.value);
};
