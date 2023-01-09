import { getPegs } from './guessSecretGame';

describe('guessSecretGame', () => {
  test('should be []', () => {
    const guess = ['Y', 'Y', 'Y', 'Y'];
    const secret = ['R', 'B', 'G', 'G'];
    const output = [] as string[];
    const pegs = getPegs(guess, secret);

    expect(pegs).toStrictEqual(output);
  });

  test("should be ['X', 'X', 'X', 'X']", () => {
    const guess = ['R', 'B', 'G', 'Y'];
    const secret = ['R', 'B', 'G', 'Y'];
    const output = ['X', 'X', 'X', 'X'];
    const pegs = getPegs(guess, secret);

    expect(pegs).toStrictEqual(output);
  });

  test("should be ['X', 'X']", () => {
    const guess = ['R', 'B', 'G', 'Y'];
    const secret = ['B', 'B', 'G', 'G'];
    const output = ['X', 'X'];
    const pegs = getPegs(guess, secret);

    expect(pegs).toStrictEqual(output);
  });

  test("should be ['0', 'X', '0', '0']", () => {
    const guess = ['B', 'B', 'B', 'B'];
    const secret = ['R', 'B', 'G', 'Y'];
    const output = ['0', 'X', '0', '0'];
    const pegs = getPegs(guess, secret);

    expect(pegs).toStrictEqual(output);
  });
});
