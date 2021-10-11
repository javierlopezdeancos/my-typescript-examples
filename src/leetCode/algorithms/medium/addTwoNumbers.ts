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

export interface INode {
  val: number;
  next: INode | null;
}

export class Node implements INode {
  public val: number;
  public next: INode | null;

  constructor(val?: number, next?: Node | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(a: Node | null, b: Node | null): Node | null {
  let sum = 0;
  let current = new Node(0);
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

    current.next = new Node(sum % 10);
    current = current.next;

    sum = sum > 9 ? 1 : 0;
  }

  if (sum) {
    current.next = new Node(sum);
  }

  return result.next;
}
