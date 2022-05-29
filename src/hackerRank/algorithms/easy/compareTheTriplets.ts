// URL: https://www.hackerrank.com/challenges/compare-the-triplets

export function compareTriplets(alice: number[], bob: number[]): number[] {
  let aliceScore = 0;
  let bobScore = 0;

  alice.forEach((ratingItem: number, i: number): void => {
    const aliceRatingItem = alice[i];
    const bobRatingItem = bob[i];

    if (aliceRatingItem === bobRatingItem) {
      return;
    }

    if (aliceRatingItem > bobRatingItem) {
      aliceScore += 1;
    } else {
      bobScore += 1;
    }
  });

  return [aliceScore, bobScore];
}
