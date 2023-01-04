import { staircase } from './staircase';

describe('staircase', (): void => {
  test('should the staircase matrix joined in a string', function () {
    const expected = '   #\n' + '  ##\n' + ' ###\n' + '####\n';
    expect(staircase(4)).toStrictEqual(expected);
  });
});
