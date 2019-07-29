const Result = require('../../../src/Domain/Core/Result');

describe('Result test suite', () => {
  test('Can create a successful Result object with a string value.', () => {
    const result = Result.default.success('This is a test success result.');
    expect(result.getValue()).toEqual('This is a test success result.');
  });

  test('Can create a successful Result object with a object value.', () => {
    const result = Result.default.success({ status: 200, message: 'Test success' });
    expect(result.getValue()).toEqual({ status: 200, message: 'Test success' });
  });

  test('Can create a failure Result object with an error message.', () => {
    const result = Result.default.fail('This is a test failure');
    expect(result.error).toEqual('This is a test failure');
  });

  test('Cannot create a Request object with a success status and fail.', () => {
    expect(() => {
      new Result.default(true, 'Something went wrong.');
    }).toThrow('InvalidOperation: A result cannot be successful and contain an error');
  });

  test('Cannot create a Request object with an error status and no error.', () => {
    expect(() => {
      new Result.default(false);
    }).toThrow('InvalidOperation: A failing result needs to contain an error message');
  });

  test('Will throw error when not value exists for result.', () => {
    expect(() => {
      Result.default.fail('This is a test failure').getValue();
    }).toThrow('Cant retrieve the value from a failed result.');
  });
});
