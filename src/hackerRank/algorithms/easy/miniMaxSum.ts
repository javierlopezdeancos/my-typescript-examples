export function miniMaxSum(nbs: number[]): string {
  let max: number = 0;
  let min: number = 0;

  for (let i = 0; i < nbs.length; i++) {
    const nb = nbs[i];
    const subNbs = nbs.filter((subNb, index) => index !== i);

    let subSum: number = 0;

    for (let j = 0; j < subNbs.length; j++) {
      subSum = subSum + subNbs[j];
    }

    if (subSum > max || i === 0) {
      max = subSum;
    }

    if (subSum < min || i === 0) {
      min = subSum;
    }
  }

  return `${min} ${max}`;
}
