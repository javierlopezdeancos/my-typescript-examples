export const countDupes = (cities: string[]): number => {
  const dupes: string[] = [];
  const uniqueCities = new Set();

  for (const c of cities) {
    if (!dupes.includes(c) && uniqueCities.has(c)) {
      dupes.push(c);
    }

    uniqueCities.add(c);
  }

  return dupes.length;
};
