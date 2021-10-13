// URL: https://www.hackerrank.com/challenges/plus-minus

function plusMinus(values: number[]): void {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  for (const value of values) {
    if (value > 0) {
      positives++;
    } else if (value < 0) {
      negatives++;
    } else {
      zeros++;
    }
  }

  const positiveCoeficient = positives / values.length;
  const negativeCoeficient = negatives / values.length;
  const zeroCoeficient = zeros / values.length;

  console.log(positiveCoeficient.toFixed(6));
  console.log(negativeCoeficient.toFixed(6));
  console.log(zeroCoeficient.toFixed(6));
}

console.log(`
/**************************************/
/*              plusMInus             */
/**************************************/
`);

plusMinus([1, 2, 0, 0, -1, -10]);
plusMinus([-4, 3, -9, 0, 4, 1]);
