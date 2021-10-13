export const countDupes = (cities: string[]): number => {
  // TODO: Fill in the code for this function to return
  // the correct number of items that are repeated in the
  // given list.

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
