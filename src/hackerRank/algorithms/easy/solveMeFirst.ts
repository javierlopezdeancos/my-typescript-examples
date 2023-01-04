// URL: https://www.hackerrank.com/challenges/solve-me-first/problem

function solveMeFirst(a = 0, b = 0): number | null {
  if (a >= 1 && b <= 1000) {
    return a + b;
  } else if (a >= 1 && b > 1000) {
    return a;
  } else if (a < 1 && b <= 1000) {
    return b;
  } else {
    return null;
  }
}

console.log(solveMeFirst(100, 1000));
console.log(solveMeFirst(2, 3));
