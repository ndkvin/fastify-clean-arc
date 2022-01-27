/* eslint-disable no-unused-vars */
import InvariantError from '../../commons/exceptions/InvariantError';
import {
  IAddNote,
  IAddedNote,
} from './Entities';

export interface INotesRepository {
  addNote(payload: IAddNote) : Promise<IAddedNote|InvariantError>
}
