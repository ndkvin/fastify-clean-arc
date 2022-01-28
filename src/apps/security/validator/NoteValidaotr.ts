/* eslint-disable no-unused-vars */
import InvariantError from '../../../commons/exceptions/InvariantError';

export interface INoteValidator {
  AddNoteValidator(payload: any): void|InvariantError
}
