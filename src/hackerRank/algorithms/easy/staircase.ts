// URL: https://www.hackerrank.com/challenges/staircase/

/*
*****
n = 4
k = 2
*****

  0 1 2 3
0 - - - #  |  n - 2 (0 + k) = 2
1 - - # #  |  n - 3 (1 + k) = 1
2 - # # #  |  n - 4 (2 + k) = 0
3 # # # #  |  n - 5 (3 + k) = -1

*****
n = 5
k = 2
*****

  0 1 2 3 4
0 - - - - #  |  n - 2 (r + k) = 3
1 - - - # #  |  n - 3 (r + k) = 2
2 - - # # #  |  n - 4 (r + k) = 1
3 - # # # #  |  n - 5 (r + k) = 0
4 # # # # #  |  n - 6 (r + k) = -1
*/

export function staircase(n: number): string {
  const k = 2;
  let matrix: string[] = [];

  for (let r = 0; r <= n - 1; r++) {
    let row = new Array(n + 1).fill(' ');
    const columnMaxWhiteSpace = n - (r + k);

    for (let c = 0; c <= n; c++) {
      if (c === n) {
        row[c] = '\n';
      } else {
        if (columnMaxWhiteSpace >= 0) {
          if (c > columnMaxWhiteSpace) {
            row[c] = '#';
          }
        } else {
          row[c] = '#';
        }
      }
    }

    matrix[r] = row.join('');
  }

  return matrix.join('');
}
