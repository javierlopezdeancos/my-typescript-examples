import { NodeType } from './Node.type';

//  undefined   ->   A   ->   B   ->   C   ->   D   ->   E   ->   F   ->  undefined
//     prev         curr     next

//  undefined   <-   A        B   ->   C   ->   D   ->   E   ->   F   ->  undefined
//                  prev     curr     next

//  undefined   <-   A   <-   B        C   ->   D   ->   E   ->   F   ->  undefined
//                           prev     curr     next

//  undefined   <-   A   <-   B   <-   C        D   ->   E   ->   F   ->  undefined
//                                    prev     curr     next

//
//    ...
//

//  undefined   <-   A   <-   B   <-   C   <-   D   <-   E   <-   F

/**
 *
 * No recursive solution
 *
export const reverseList = <V>(headNode: NodeType<V>): NodeType<V> | undefined => {
  let prev: NodeType<V> | undefined = undefined;
  let current: NodeType<V> | undefined = headNode;

  while (current) {
    const next: NodeType<V> | undefined = current.next;

    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
*/

/**
 *
 * Recursive solution
 */
export const reverseList = <V>(
  headNode: NodeType<V> | undefined,
  prev: NodeType<V> | undefined = undefined
): NodeType<V> | undefined => {
  if (!headNode) {
    return prev;
  }

  const next = headNode.next;
  headNode.next = prev;

  return reverseList(next, headNode);
};
