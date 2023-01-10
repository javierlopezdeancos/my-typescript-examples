/**
 * use case - 1
 * ----------
 *
 * scores = [12, 24, 10, 24]
 *                                  Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1

 * use case - 2
 * ----------
 *
 * scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
 *                                  Count
    Game  Score  Minimum  Maximum   Min Max
     0      10     10       10       0   0
     1       5      5       10       1   0
     2      20      5       20       1   1
     3      20      5       20       1   1
     4       4      4       20       2   1
     5       5      4       20       2   1
     6       2      2       20       3   1
     7      25      2       25       3   2
     8       1      1       25       4   2
*/

export function breakingRecords(scores: number[]): number[] {
  let min = scores[0];
  let max = scores[0];
  let lessThanMin = 0;
  let moreThanMax = 0;

  for (let s = 0; s < scores.length; s++) {
    const score = scores[s];

    if (s === 0) {
      min = scores[0];
      max = scores[0];
    }

    if (s > 0) {
      if (score < min) {
        lessThanMin++;
        min = score;
      } else if (score > max) {
        moreThanMax++;
        max = score;
      }
    }
  }

  return [moreThanMax, lessThanMin];
}
