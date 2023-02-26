import { NodeType } from './Node.type';

//  Linked nodes 1:  A   ->   B   ->   C   ->   D   ->   undefined
//  Linked nodes 2:  Q   ->   R   ->   undefined
//
// --------------------------------------------------------------------------------------
//
// Count 0
// Linked nodes 1:   A     ->     B     ->     C     ->     D     ->     undefined
//                             current
//
// Linked nodes 2:   Q     ->     R     ->     undefined
//                current
//
// Tail:             A
//                current
//
// --------------------------------------------------------------------------------------
//
// Count 1
// Linked nodes 1:   A     ->     B     ->     C     ->     D     ->     undefined
//                              current
//
// Linked nodes 2:   Q     ->     R     ->     undefined
//                             current
//
// Tail:             A     ->     Q
//                             current
//
// --------------------------------------------------------------------------------------
//
// Count 2
// Linked nodes 1:   A     ->     B     ->     C     ->     D     ->     undefined
//                                          current
//
// Linked nodes 2:   Q     ->     R     ->     undefined
//                             current
//
// Tail:             A     ->     Q     ->     B
//                                          current
//
// --------------------------------------------------------------------------------------
//
// Count 3
// Linked nodes 1:   A     ->     B     ->     C     ->     D     ->     undefined
//                                          current
//
// Linked nodes 2:   Q     ->     R     ->  undefined
//                                           current
//
// Tail:             A     ->     Q     ->     B     ->     R
//                                                       current
//
// --------------------------------------------------------------------------------------
//
// Count 4
// Linked nodes 1:   A     ->     B       ->       C       ->       D       ->      undefined
//                                                                                   current
//
// Linked nodes 2:   Q     ->     R       ->    undefined
//                                               current
//
// Tail:   A     ->     Q       ->       B       ->       R       ->      C      ->       D       ->     undefined
//                                                                                                        current

/**
 *
 * No recursive solution
 *
export const zipperLists = <V>(headNode1: NodeType<V>, headNode2: NodeType<V>): NodeType<V> | undefined => {
  let tail: NodeType<V> = headNode1;
  let current1: NodeType<V> | undefined = headNode1.next;
  let current2: NodeType<V> | undefined = headNode2;
  let count: number = 0;

  while (current1 && current2) {
    const countIsEven = count % 2 === 0;

    if (countIsEven) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }

    tail = tail.next;
    count++;
  }

  if (current1) {
    tail.next = current1;
  }

  if (current2) {
    tail.next = current2;
  }

  return headNode1;
};
*/

/**
 *
 * Recursive solution
 *
 */
export const zipperLists = <V>(headNode1?: NodeType<V>, headNode2?: NodeType<V>): NodeType<V> | undefined => {
  if (!headNode1 && !headNode2) {
    return undefined;
  }

  if (!headNode1) {
    return headNode2;
  }

  if (!headNode2) {
    return headNode1;
  }

  const next1 = headNode1.next;
  const next2 = headNode2.next;

  headNode1.next = headNode2;
  headNode2.next = zipperLists(next1, next2);

  return headNode1;
};
