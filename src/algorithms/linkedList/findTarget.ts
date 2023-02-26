import { NodeType } from './Node.type';

export const findTarget = <V>(headNode: NodeType<V>, target: V): boolean => {
  let isIn = false;

  if (headNode.value === target) {
    return true;
  }

  if (headNode?.next) {
    isIn = findTarget(headNode.next, target);
  }

  return isIn;
};
