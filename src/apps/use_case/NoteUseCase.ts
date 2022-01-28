import { injectable, inject } from 'inversify';
import { IAddNote, IAddedNote } from '../../domains/notes/Entities';
import { INotesRepository } from '../../domains/notes/NotesRepository';
import { INoteValidator } from '../security/validator/NoteValidaotr';
import NOTES_TYPES from '../../commons/inversifyTypes/notes';
import 'reflect-metadata';

@injectable()
class NoteUseCase {
  private _repository: INotesRepository;
  private _validator: INoteValidator;
  constructor(
    @inject(NOTES_TYPES.Repository) repository: INotesRepository,
    @inject(NOTES_TYPES.Validator) validator: INoteValidator,
  ) {
    this._repository = repository;
    this._validator = validator;
  }

  async addNoteExecute(payload: IAddNote): Promise<IAddedNote> {
    await this._validator.AddNoteValidator(payload);
    const result = await this._repository.addNote(payload);
    return result;
  }
}

export default NoteUseCase;
