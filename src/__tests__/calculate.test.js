import calculate from '../logic/calculate';

describe('the result shoult match', () => {
  test('3+4=7', () => {
    const object = {
      total: 3,
      next: 4,
      operation: '+',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('7');
  });
  test('5-2=3', () => {
    const object = {
      total: 5,
      next: 2,
      operation: '-',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('3');
  });
  test('2x2=4', () => {
    const object = {
      total: 2,
      next: 2,
      operation: 'x',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('4');
  });
  test('4÷2=2', () => {
    const object = {
      total: 4,
      next: 2,
      operation: '÷',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('2');
  });
  test('2%2=0', () => {
    const object = {
      total: 2,
      next: 2,
      operation: '%',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('0');
  });
});
