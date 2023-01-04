// https://www.hackerrank.com/challenges/repeated-string/problem

export function repeatedString(chars: string, numberOfCharsToCount: number): number {
  const l = chars.length;
  const needRepeat = numberOfCharsToCount > chars.length;

  if (!needRepeat) {
    return chars.split('').filter((char: string, index: number) => char === 'a' && index < numberOfCharsToCount).length;
  }

  const areDifferentCharsThanA = chars.split('').filter((c) => c !== 'a').length;

  if (!areDifferentCharsThanA) {
    return numberOfCharsToCount;
  }

  const numberOfLoopsAreInteger = numberOfCharsToCount % l === 0;
  const numberOfACharsCounted = chars.split('').filter((c) => c === 'a').length;
  const realNumberOfLoops = numberOfCharsToCount / l;

  if (numberOfLoopsAreInteger) {
    return realNumberOfLoops * numberOfACharsCounted;
  }

  const integerNumberOfLoops = Math.trunc(realNumberOfLoops);
  const numberOfCharsCounted = integerNumberOfLoops * l;
  let a = integerNumberOfLoops * numberOfACharsCounted;

  for (let i = 1; i <= l; i++) {
    const char = chars.charAt(i - 1);
    const charIsA = char === 'a';

    const exceedNumberOfCharsToCount = numberOfCharsCounted + i > numberOfCharsToCount;

    if (exceedNumberOfCharsToCount) {
      break;
    }

    if (charIsA) {
      a++;
    }
  }

  return a;
}
