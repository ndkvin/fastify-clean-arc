import { injectable, inject } from 'inversify';
import { QueryResult } from 'pg';
import NOTES_TYPES, { Pool, Nanoid } from '../../commons/inversifyTypes/notes';
import { INotesRepository } from '../../domains/notes/NotesRepository';
import {
  IAddNote,
  IAddedNote,
} from '../../domains/notes/Entities';
import 'reflect-metadata';

@injectable()
class NoteRepositoryPostgres implements INotesRepository {
  private _pool: Pool;
  private _idGenerator: Nanoid;

  constructor(
    @inject(NOTES_TYPES.Pool) pool: Pool,
    @inject(NOTES_TYPES.Nanoid) idGenerator: Nanoid,
  ) {
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addNote(payload: IAddNote): Promise<IAddedNote> {
    const { title, body } = payload;
    const id: string = `note-${this._idGenerator(16)}`;

    const query = {
      text: 'INSERT INTO notes VALUES($1, $2, $3, $4) returning id',
      values: [id, title, body, 'saya'],
    };

    const result: QueryResult<IAddedNote> = await this._pool.query(query);

    return result.rows[0];
  }
}

export default NoteRepositoryPostgres;
