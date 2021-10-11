import { plusOne } from "./plusOne";

describe("addTwoNumbers", (): void => {
  test("should plus one into integer represented by an 3 digits array", function () {
    const a = [1, 2, 3];
    const expected = [1, 2, 4];

    expect(plusOne(a)).toStrictEqual(expected);
  });

  test("should plus one into integer represented by an 4 digits array", function () {
    const a = [4, 3, 2, 1];
    const expected = [4, 3, 2, 2];

    expect(plusOne(a)).toStrictEqual(expected);
  });

  test("should plus one into integer represented by an 1 digits array", function () {
    const a = [0];
    const expected = [1];

    expect(plusOne(a)).toStrictEqual(expected);
  });

  test("should add a digit one from left if plus one to the digit means > 9", function () {
    const a = [9];
    const aExpected = [1, 0];

    const b = [2, 9];
    const bExpected = [3, 0];

    const c = [9, 9];
    const cExpected = [1, 0, 0];

    expect(plusOne(a)).toStrictEqual(aExpected);
    expect(plusOne(b)).toStrictEqual(bExpected);
    expect(plusOne(c)).toStrictEqual(cExpected);
  });
});
