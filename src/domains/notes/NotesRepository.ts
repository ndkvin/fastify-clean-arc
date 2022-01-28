/* eslint-disable no-unused-vars */
import {
  IAddNote,
  IAddedNote,
} from './Entities';

export interface INotesRepository {
  addNote(payload: IAddNote) : Promise<IAddedNote>
}
