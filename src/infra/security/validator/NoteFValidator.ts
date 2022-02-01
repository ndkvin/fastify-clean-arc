import { injectable, inject } from 'inversify';
import { ValidationError } from 'fastest-validator';
import NOTES_TYPES, { Fv } from '../../../commons/inversifyTypes/notes';
import { INoteValidator } from '../../../apps/security/validator/NoteValidaotr';
import InvariantError from '../../../commons/exceptions/InvariantError';
import 'reflect-metadata';

@injectable()
class NoteFValidator implements INoteValidator {
  private _validator: Fv;
  constructor(
    @inject(NOTES_TYPES.Fv) validator: Fv,
  ) {
    this._validator = validator;
  }

  AddNoteValidator(payload: any) {
    const schema = {
      title: {
        type: 'string',
        max: 50,
        messages: {
          required: 'title can\'t empty',
          string: 'title must be a string',
          stringMax: 'title max have 50 character',
        },
      },
      body: {
        type: 'string',
        messages: {
          required: 'body can\'t empty',
          string: 'body must be a string',
        },
      },
    };

    const validate = this._validator.compile(schema);
    const result = validate(payload);

    if (result !== true) {
      const err = result as ValidationError[];
      throw new InvariantError(err[0].message as string);
    }
  }
}

export default NoteFValidator;
