import { staircase } from './staircase';

describe("staircase", (): void => {
  test("should sum two strings that represent two binaries and return the sum stringify", function () {
    const expected = '   #\n' + '  ##\n' + ' ###\n' + '####\n';
    expect(staircase(4)).toStrictEqual(expected);
  });
});
