import ClientError from '../ClientError';

describe('ClientError', () => {
  it('should return error when directlt call Client Error', () => {
    expect(() => new ClientError(''))
      .toThrowError('Cannot call ClientError directly');
  });
});
