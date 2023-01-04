import { lengthOfLongestSubstring } from './longestSubstringWithoutRepeatingCharacters';

describe('longestSubStringWithoutRepeatingCharacter', (): void => {
  test('abcabcbb', function () {
    const s = 'abcabcbb';
    const length = lengthOfLongestSubstring(s);

    expect(length).toBe(3);
  });

  test('bbbbb', function () {
    const s = 'bbbbb';
    const length = lengthOfLongestSubstring(s);

    expect(length).toBe(1);
  });

  test('pwwkew', function () {
    const s = 'pwwkew';
    const length = lengthOfLongestSubstring(s);

    expect(length).toBe(3);
  });

  test('dvdf', () => {
    const s = 'dvdf';
    const length = lengthOfLongestSubstring(s);

    expect(length).toBe(3);
  });
});
