/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single
 * digit.
 *
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero,
 * except the number 0 itself.
 *
 * Definition for singly-linked list.
 *
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export type ListNodeType = {
  val: number;
  next: ListNodeType | null;
};

export function createListNode(val?: number, next?: ListNodeType): ListNodeType {
  return {
    val: val || 0,
    next: next || null,
  };
}

//        2   4   3
//        5   6   4
//        7   0   8

export function addTwoNumbers(a: ListNodeType | null, b: ListNodeType | null): ListNodeType | null {
  let sum = 0;
  let current = createListNode(0);
  let result = current;

  while (a || b) {
    if (a) {
      sum += a.val;
      a = a.next;
    }

    if (b) {
      sum += b.val;
      b = b.next;
    }

    current.next = createListNode(sum % 10);
    current = current.next;

    sum = sum > 9 ? 1 : 0;
  }

  if (sum) {
    current.next = createListNode(sum);
  }

  return result.next;
}
