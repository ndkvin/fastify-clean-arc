import Validator from 'fastest-validator';
import InvariantError from '../../../../commons/exceptions/InvariantError';
import NoteFValidator from '../NoteFValidator';

describe('NoteFValidator', () => {
  const fv = new Validator();
  const noteFValidator = new NoteFValidator(fv);
  it.each([
    [
      {
      }, 'title can\'t empty',
    ],
    [
      {
        body: 'body',
      }, 'title can\'t empty',
    ],
    [
      {
        title: 'title',
      }, 'body can\'t empty',
    ],
    [
      {
        title: true,
        body: 'body',
      }, 'title must be a string',
    ],
    [
      {
        title: 'title',
        body: true,
      }, 'body must be a string',
    ],
  ])('should return error when send bad payload', (input, expected) => {
    expect(() => noteFValidator.AddNoteValidator(input))
      .toThrowError(expected);
  });
  it('should not return error when send incomplete payload', () => {
    const payload = {
      title: 'ini title',
      body: 'ini body',
    };

    expect(() => noteFValidator.AddNoteValidator(payload))
      .not.toThrowError(InvariantError);
  });
});
