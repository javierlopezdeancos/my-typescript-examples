// URL: https://www.hackerrank.com/challenges/simple-array-sum/

function simpleArraySum(ar: number[]): number {
  var sum = ar.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });

  return sum;
}

console.log(`
/**************************************/
/*         simpleArraySum             */
/**************************************/
`);

console.log(simpleArraySum([1, 2, 3, 4, 10, 11])); // 31
