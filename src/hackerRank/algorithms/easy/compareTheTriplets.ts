// URL: https://www.hackerrank.com/challenges/compare-the-triplets

function compareTriplets(alice: number[], bob: number[]): number[] {
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

console.log(`
/**************************************/
/*         compareTheTriplets         */
/**************************************/
`);

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
