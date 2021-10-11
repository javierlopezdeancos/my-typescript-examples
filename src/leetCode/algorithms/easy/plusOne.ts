/**
 *
 * Given a non-empty array of decimal digits representing a non-negative integer,
 * increment one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of the
 * list, and each element in the array contains a single digit.
 *
 * You may assume the integer does not contain any leading zero,
 * except the number 0 itself.
 *
 * Example 1:
 *
 *  Input: digits = [1,2,3]
 *  Output: [1,2,4]
 *  Explanation: The array represents the integer 123
 *
 * Example 2:
 *
 *  Input: digits = [4,3,2,1]
 *  Output: [4,3,2,2]
 *  Explanation: The array represents the integer 4321.
 *
 * Example 3:
 *
 *  Input: digits = [0]
 *  Output: [1]
 *
 * Constraints:
 *  1 <= digits.length <= 100
 *  0 <= digits[i] <= 9
 *
 *
 * Cases
 *  [9] -> [1, 0]
 *  [2, 9] -> [3, 0]
 *  [9, 9] -> [1, 0, 0]
 */

export function plusOne(digits: number[]): number[] {
  for (let d = digits.length - 1; d >= 0; d--) {
    digits[d]++;

    if (digits[d] > 9) {
      digits[d] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
}
