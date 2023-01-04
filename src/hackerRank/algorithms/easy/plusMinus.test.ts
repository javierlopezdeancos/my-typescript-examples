import { plusMinus } from './plusMinus';

describe('Repeated String', () => {
  it('plusMinus([1, 2, 0, 0, -1, -10]', () => {
    expect(plusMinus([1, 2, 0, 0, -1, -10])).toEqual({
      positive: '0.333333',
      negative: '0.333333',
      zero: '0.333333',
    });
  });

  it('plusMinus([-4, 3, -9, 0, 4, 1]', () => {
    expect(plusMinus([-4, 3, -9, 0, 4, 1])).toEqual({
      positive: '0.500000',
      negative: '0.333333',
      zero: '0.166667',
    });
  });
});
