import { birthdayCakeCandles } from './birthdayCakeCandles';

describe('birthdayCakeCandles', (): void => {
  test('should return 2 if [4, 4, 1, 3]', function () {
    const candles = [4, 4, 1, 3];

    expect(birthdayCakeCandles(candles)).toBe(2);
  });

  test('should return 3 if [3, 3, 1, 3]', function () {
    const candles = [3, 3, 1, 3];

    expect(birthdayCakeCandles(candles)).toBe(3);
  });

  test('should return 0 if [0]', function () {
    const candles = [0];

    expect(birthdayCakeCandles(candles)).toBe(1);
  });

  test('should return 3 if [0, 0, 0]', function () {
    const candles = [0, 0, 0];

    expect(birthdayCakeCandles(candles)).toBe(3);
  });
});
