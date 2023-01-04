import { addArrayFormOfInteger } from './addToArrayFormOfInteger';

describe('addArrayFormOfInteger', (): void => {
  test('should sum two strings that represent two binaries and return the sum stringifyed', function () {
    const num = [1, 2, 0, 0];
    const k = 34;
    const expected = [1, 2, 3, 4];

    expect(addArrayFormOfInteger(num, k)).toStrictEqual(expected);
  });

  test('should sum included when summeans count the carry', function () {
    const numB = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
    const kB = 1;
    const expectedB = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const numA = [2, 1, 5];
    const kA = 806;
    const expectedA = [1, 0, 2, 1];

    expect(addArrayFormOfInteger(numA, kA)).toStrictEqual(expectedA);
    expect(addArrayFormOfInteger(numB, kB)).toStrictEqual(expectedB);
  });

  test('should sum if the num is smaller than k', function () {
    const num = [0];
    const k = 23;
    const expected = [2, 3];

    expect(addArrayFormOfInteger(num, k)).toStrictEqual(expected);
  });
});
