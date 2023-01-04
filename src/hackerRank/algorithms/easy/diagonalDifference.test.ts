import { diagonalDifference } from './diagonalDifference';

describe('Diagonal difference', () => {
  it('should return 10 as diagonal difference from [[11, 2], [4, 5]] matrix', () => {
    expect(
      diagonalDifference([
        [11, 2],
        [4, 5],
      ])
    ).toEqual(10);
  });

  it('should return 15 as diagonal difference from [[11, 2, 4], [4, 5, 6], [10, 8, -12]] matrix', () => {
    expect(
      diagonalDifference([
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
      ])
    ).toEqual(15);
  });
});
