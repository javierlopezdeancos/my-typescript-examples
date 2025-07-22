import { addTwoNumbers, createLinkedListNode } from './addTwoNumbers';

describe('addTwoNumbers', (): void => {
  test('should sum nodes with same levels', function () {
    const a = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
          next: null,
        },
      },
    };

    const b = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
          next: null,
        },
      },
    };

    /*
    const c = {
      val: 7,
      next: {
        val: 0,
        next: {
          val: 8,
          next: null
        }
      }
    };
    */

    const eightNode = createLinkedListNode(8);
    const zeroNode = createLinkedListNode(0, eightNode);
    const sevenNode = createLinkedListNode(7, zeroNode);

    //   2 -> 4 -> 3
    //   5 -> 6 -> 4  +
    //  -------------
    //   7 -> 0 -> 8

    const expected = JSON.stringify(sevenNode);
    const received = JSON.stringify(addTwoNumbers(a, b));

    expect(received).toStrictEqual(expected);
  });

  test('should sum when one list is longer than the other', function () {
    const a = {
      val: 0,
      next: {
        val: 1,
        next: null,
      },
    };

    const b = {
      val: 0,
      next: {
        val: 1,
        next: {
          val: 2,
          next: null,
        },
      },
    };

    const twoLastNode = createLinkedListNode(2);
    const twoNode = createLinkedListNode(2, twoLastNode);
    const zeroNode = createLinkedListNode(0, twoNode);

    //   0 -> 1
    //   0 -> 1 -> 2  +
    //  -------------
    //   0 -> 2 -> 2

    const expected = JSON.stringify(zeroNode);
    const received = JSON.stringify(addTwoNumbers(a, b));

    expect(received).toStrictEqual(expected);
  });

  test('should sum when one list is null, which means an empty list', function () {
    const a = null;

    const b = {
      val: 0,
      next: {
        val: 1,
        next: null,
      },
    };

    const oneNode = createLinkedListNode(1);
    const zeroNode = createLinkedListNode(0, oneNode);

    //
    //   0 -> 1  +
    //  -------
    //   0 -> 1

    const expected = JSON.stringify(zeroNode);
    const received = JSON.stringify(addTwoNumbers(a, b));

    expect(received).toStrictEqual(expected);
  });

  test('should sum if could have an extra carry of one at the end, which is easy to forget', function () {
    const a = {
      val: 9,
      next: {
        val: 9,
        next: null,
      },
    };

    const b = {
      val: 1,
      next: null,
    };

    const oneNode = createLinkedListNode(1);
    const zeroNode = createLinkedListNode(0, oneNode);
    const zeroFirstNode = createLinkedListNode(0, zeroNode);

    //   9 -> 9
    //   1      +
    //  -------
    //   0 -> 0 -> 1

    const expected = JSON.stringify(zeroFirstNode);
    const received = JSON.stringify(addTwoNumbers(a, b));

    expect(received).toStrictEqual(expected);
  });
});
