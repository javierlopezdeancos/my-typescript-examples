// URL: https://www.hackerrank.com/challenges/diagonal-difference

export function diagonalDifference(matrix: number[][]): number {
  let diagonalLeft = [];
  let diagonalRight = [];

  for (let i = 0; i < matrix.length; i++) {
    diagonalLeft.push(matrix[i][i]);
    diagonalRight.push(matrix[i][matrix.length - 1 - i]);
  }

  let sumLeftDiagonal = diagonalLeft.reduce((acc, cur) => {
    return acc + cur;
  });

  let sumRightDiagonal = diagonalRight.reduce((acc, cur) => {
    return acc + cur;
  });

  return Math.abs(sumRightDiagonal - sumLeftDiagonal);
}
