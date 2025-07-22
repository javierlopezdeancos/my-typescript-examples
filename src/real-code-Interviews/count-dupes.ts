export const countDupes = (cities: string[]): number => {
  const repeatedCities: string[] = [];
  const uniqueCities = new Set();

  for (const city of cities) {
    const isUniqueCity = uniqueCities.has(city);

    if (!isUniqueCity) {
      uniqueCities.add(city);
      continue;
    }

    const isRepeated = repeatedCities.includes(city);

    if (isUniqueCity && !isRepeated) {
      repeatedCities.push(city);
    }
  }

  return repeatedCities.length;
};
