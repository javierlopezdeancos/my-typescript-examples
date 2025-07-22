import { countDupes } from './count-dupes';

describe('countDupes', () => {
  it('should return 2', () => {
    expect(
      countDupes([
        'nashville',
        'nashville',
        'los angeles',
        'nashville',
        'memphis',
        'barcelona',
        'sevillia',
        'isla canary',
        'barcelona',
      ])
    ).toBe(2);
  });

  it('should return 3', () => {
    expect(
      countDupes([
        'nashville',
        'nashville',
        'los angeles',
        'nashville',
        'memphis',
        'barcelona',
        'sevillia',
        'isla canary',
        'isla canary',
        'barcelona',
      ])
    ).toBe(3);
  });

  it('should return 0', () => {
    expect(countDupes([])).toBe(0);
  });

  it('should return 3', () => {
    expect(
      countDupes([
        'nashville',
        'nashville',
        'los angeles',
        'nashville',
        'memphis',
        'barcelona',
        'sevillia',
        'sevillia',
        'sevillia',
        'sevillia',
        'isla canary',
        'isla canary',
        'barcelona',
      ])
    ).toBe(4);
  });

  it('should return 3, not case sensitive', () => {
    expect(
      countDupes([
        'nashville',
        'nashville',
        'los angeles',
        'nashville',
        'memphis',
        'barcelona',
        'sevillia',
        'sevillia',
        'sevillia',
        'sevillia',
        'Isla canary',
        'isla canary',
        'barcelona',
      ])
    ).toBe(3);
  });
});
