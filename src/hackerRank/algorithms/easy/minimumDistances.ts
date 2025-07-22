// a = [3, 2 ,1, 2, 3]

export function minimumDistances(numbers: number[]): number {
  let min = Number.MAX_SAFE_INTEGER;

  if (numbers.length <= 1) {
    return -1;
  }

  const pairs = new Set<number>();

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];

    const repeated = numbers.filter((x: number) => x === n).length;

    if (repeated !== 2 || pairs.has(n)) {
      continue;
    }

    const j = numbers.indexOf(n);
    const k = numbers.lastIndexOf(n);
    const distance = Math.abs(j - k);

    min = Math.min(min, distance);
    pairs.add(n);
  }

  return min === Number.MAX_SAFE_INTEGER ? -1 : min;
}
