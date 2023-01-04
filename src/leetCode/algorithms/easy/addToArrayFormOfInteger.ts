/**
 * The array-form of an integer num is an array representing its digits in left to right order.
 * For example, for num = 1321, the array form is [1,3,2,1].
 * Given num, the array-form of an integer, and an integer k,
 * return the array-form of the integer num + k.
 *
 * Example 1:
 *
 *  Input: num = [1,2,0,0], k = 34
 *  Output: [1,2,3,4]
 *
 * Explanation: 1200 + 34 = 1234
 *
 * Example 2:
 *
 *  Input: num = [2,7,4], k = 181
 *  Output: [4,5,5]
 *
 * Explanation: 274 + 181 = 455
 *
 * Example 3:
 *
 *  Input: num = [2,1,5], k = 806
 *  Output: [1,0,2,1]
 *
 * Explanation: 215 + 806 = 1021
 *
 * Example 4:
 *
 *  Input: num = [9,9,9,9,9,9,9,9,9,9], k = 1
 *  Output: [1,0,0,0,0,0,0,0,0,0,0]
 *
 * Explanation: 9999999999 + 1 = 10000000000
 */

function getArrayFromInteger(int: number): number[] {
  /**
   * Other option to the same implementation.
   * const s = int.toString()
   * return s.split('').map(Number)
   */
  const stringToNumber = (str: string) => Number(str);
  return Array.from(String(int), stringToNumber);
}

function getBigger(a: number[], b: number[]): number[] {
  if (a.length >= b.length) {
    return a;
  }

  return b;
}

function getSmaller(a: number[], b: number[]): number[] {
  if (a.length < b.length) {
    return a;
  }

  return b;
}

function getFilledWithZeros(nums: number[], zeros: number): number[] {
  for (let n = zeros; n > 0; n--) {
    nums.unshift(0);
  }

  return [...nums];
}

export function addArrayFormOfInteger(num: number[], k: number): number[] {
  const sum = [] as number[];

  const ks = getArrayFromInteger(k);
  const bigger = getBigger(num, ks);
  const small = getSmaller(num, ks);
  const zerosToAddToSmall = bigger.length - small.length;
  const smallWithZeros = getFilledWithZeros(small, zerosToAddToSmall);

  let carry = 0;

  for (let s = bigger.length - 1; s >= 0; s--) {
    const ai = smallWithZeros[s] ? smallWithZeros[s] : 0;
    const bi = bigger[s] ? bigger[s] : 0;
    const si = ai + bi + carry;

    if (si > 9) {
      carry = 1;
      sum[s] = si % 10;

      if (s === 0) {
        sum.unshift(1);
        carry = 0;
      }
    } else {
      carry = 0;
      sum[s] = si;
    }
  }

  return sum;
}
