import NotFoundError from '../NotFoundError';

describe('NotFoundError', () => {
  it('should return NotFoundError', () => {
    const notFoundError = new NotFoundError('a not found error');

    expect(notFoundError.message).toEqual('a not found error');
    expect(notFoundError.statusCode).toEqual(404);
    expect(notFoundError.name).toEqual('NotFoundError');
  });
});
