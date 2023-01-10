import { timeConversion } from './timeConversion';

describe('timeConversion', () => {
  test('12:00:00AM should be converted to 00:00:00', () => {
    const time = timeConversion('12:00:00AM');
    expect(time).toBe('00:00:00');
  });

  test('12:01:00PM should be converted to 12:01:00', () => {
    const time = timeConversion('12:01:00PM');
    expect(time).toBe('12:01:00');
  });

  test('07:05:45PM should be converted to 19:05:45', () => {
    const time = timeConversion('07:05:45PM');
    expect(time).toBe('19:05:45');
  });
});
