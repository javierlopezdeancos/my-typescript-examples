import { multiplyStrings } from './multiplyStrings';

describe('addTwoNumbers', (): void => {
  test('1', function () {
    const a = '2';
    const b = '3';

    expect(multiplyStrings(a, b)).toBe('6');
  });

  test('2', function () {
    const a = '123';
    const b = '456';

    expect(multiplyStrings(a, b)).toBe('56088');
  });

  test('3', function () {
    const a = '12345678';
    const b = '45678912';

    expect(multiplyStrings(a, b)).toBe('563937138942336');
  });

  test('4', function () {
    const a = '123456789';
    const b = '456789123';

    expect(multiplyStrings(a, b)).toBe('56393718375706047');
  });

  test('5', function () {
    const a = '93338527';
    const b = '85731737';

    expect(multiplyStrings(a, b)).toBe('8002074048731399');
  });
});
