import InvariantError from '../InvariantError';

describe('InvariantError', () => {
  it('should return Invariant Error', () => {
    const invariantError = new InvariantError('an invariant error');

    expect(invariantError.message).toEqual('an invariant error');
    expect(invariantError.statusCode).toEqual(400);
    expect(invariantError.name).toEqual('InvariantError');
  });
});
