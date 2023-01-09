import { miniMaxSum } from './miniMaxSum';

describe('miniMaxSum', () => {
  test('should be 16 24', () => {
    const input = [1, 3, 5, 7, 9];
    const output = miniMaxSum(input);

    expect(output).toBe('16 24');
  });

  test('should be 10 14', () => {
    const input = [1, 2, 3, 4, 5];
    const output = miniMaxSum(input);

    expect(output).toBe('10 14');
  });

  test('should be 20 20', () => {
    const input = [5, 5, 5, 5, 5];
    const output = miniMaxSum(input);

    expect(output).toBe('20 20');
  });
});
