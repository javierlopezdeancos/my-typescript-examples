import { breakingRecords } from './breakingRecords';

describe('Repeated String', () => {
  it('should return [2, 4] record breaks from [10, 5, 20, 20, 4, 5, 2, 25, 1] scores', () => {
    expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([2, 4]);
  });

  it('should return [4, 0] record breaks from [3, 4, 21, 36, 10, 28, 35, 5, 24, 42] scores', () => {
    expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toEqual([4, 0]);
  });
});
