export const countDupes = (cities: string[]): number => {
  const dupes: string[] = [];
  const uniqueCities = new Set();

  for (const city of cities) {
    const isDupe = dupes.includes(city);
    const isRepeated = uniqueCities.has(city);

    if (!isDupe && isRepeated) {
      dupes.push(city);
    }

    if (!isRepeated) {
      uniqueCities.add(city);
    }
  }

  return dupes.length;
};
