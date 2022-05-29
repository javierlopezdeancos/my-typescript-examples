// URL: https://www.hackerrank.com/challenges/plus-minus

type Coefficient = {
  positive: string;
  negative: string;
  zero: string;
};

export function plusMinus(values: number[]): Coefficient {
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

  const positiveCoefficient = positives / values.length;
  const negativeCoefficient = negatives / values.length;
  const zeroCoefficient = zeros / values.length;

  return {
    positive: positiveCoefficient.toFixed(6),
    negative: negativeCoefficient.toFixed(6),
    zero: zeroCoefficient.toFixed(6),
  };
}
