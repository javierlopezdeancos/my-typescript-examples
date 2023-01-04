import { repeatedString } from './repeatedString';

describe('Repeated String', () => {
  it('should return 2 a chars counted in the first 4 chars repeated infinite times "ababa"', () => {
    expect(repeatedString('ababa', 4)).toEqual(2);
  });

  it('should return 4 a chars counted in the first 10 chars repeated infinite times "abcac"', () => {
    expect(repeatedString('abcac', 10)).toEqual(4);
  });

  it('should return 6 a chars counted in the first 11 chars repeated infinite times "abad"', () => {
    expect(repeatedString('abad', 11)).toEqual(6);
  });

  it('should return 7 a chars counted in the first 10 chars repeated infinite times "aba"', () => {
    expect(repeatedString('aba', 10)).toEqual(7);
  });

  it('should return 7 a chars counted in the first 1000000000000  chars repeated infinite times "a"', () => {
    expect(repeatedString('a', 1000000000000)).toEqual(1000000000000);
  });

  it('should return 588525 a chars counted in the first 882787  chars repeated infinite times "aab"', () => {
    expect(repeatedString('aab', 882787)).toEqual(588525);
  });

  it('should return 51574523448 a chars counted in the first 736778906400 chars repeated infinite times "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm"', () => {
    expect(
      repeatedString(
        'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm',
        736778906400
      )
    ).toEqual(51574523448);
  });

  it('should return 138511468548 a chars counted in the first 554045874191 chars repeated infinite times "cfimaakj"', () => {
    expect(repeatedString('cfimaakj', 554045874191)).toEqual(138511468548);
  });
});
