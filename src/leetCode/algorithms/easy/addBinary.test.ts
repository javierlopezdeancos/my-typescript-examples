import { addBinary } from "./addBinary";

describe("addBinary", (): void => {
  test("should sum two strings that represent two binaries and return the sum stringify", function () {
    const a = "11";
    const b = "1";
    const expected = "100";

    expect(addBinary(a, b)).toStrictEqual(expected);
  });

  test("should add binary strings even if the sum implies a final carrey of one", function () {
    const a = "1010";
    const b = "1011";
    const expected = "10101";

    expect(addBinary(a, b)).toStrictEqual(expected);
  });
});
