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
      const prevScore = scores[s - 1];

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
