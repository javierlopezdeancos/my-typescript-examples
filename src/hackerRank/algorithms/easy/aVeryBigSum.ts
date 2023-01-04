// URL: https://www.hackerrank.com/challenges/a-very-big-sum

function aVeryBigSum(values: number[]): number {
  return values.reduce((acumulator, currentValue) => acumulator + currentValue);
}

console.log(`
/**************************************/
/*            aVeryBigSum             */
/**************************************/
`);

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
