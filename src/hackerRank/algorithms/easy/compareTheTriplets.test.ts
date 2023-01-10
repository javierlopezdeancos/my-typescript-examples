import { compareTriplets } from './compareTheTriplets';

describe('Repeated String', () => {
  it('should return [ 1, 1 ] if alice = [5, 6, 7] and bob = [3, 6, 10]', () => {
    expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
  });

  it('should return [ 2, 1 ] if alice = [17, 28, 30]and bob = [99, 16, 8]', () => {
    expect(compareTriplets([17, 28, 30], [99, 16, 8])).toEqual([2, 1]);
  });
});
