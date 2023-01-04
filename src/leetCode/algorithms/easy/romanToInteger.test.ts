import { romanToInteger } from './romanToInteger';

describe('romanToInteger', (): void => {
  test('should return 1 if try to pass I', function () {
    const a = 'I';
    const expected = 1;

    expect(romanToInteger(a)).toStrictEqual(expected);
  });

  test('should return 2 if try to pass II', function () {
    const a = 'II';
    const expected = 2;

    expect(romanToInteger(a)).toStrictEqual(expected);
  });

  test('should return 3 if pass III', function () {
    const a = 'III';
    const expected = 3;

    expect(romanToInteger(a)).toStrictEqual(expected);
  });

  test('should return 4 if try to pass IV', function () {
    const a = 'IV';
    const expected = 4;

    expect(romanToInteger(a)).toStrictEqual(expected);
  });

  test('should return 9 if try to pass IX', function () {
    const a = 'IX';
    const expected = 9;

    expect(romanToInteger(a)).toStrictEqual(expected);
  });

  test('should return 58 if try to pass ', function () {
    const a = 'LVIII';
    const expected = 58;

    expect(romanToInteger(a)).toStrictEqual(expected);
  });

  test('should return 58 if try to pass ', function () {
    const a = 'MCMXCIV';
    const expected = 1994;

    expect(romanToInteger(a)).toStrictEqual(expected);
  });
});
